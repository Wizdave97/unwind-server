import { gql } from 'apollo-server-express'
import { GraphQLRequestContext, GraphQLRequestListener, GraphQLResponse, WithRequired } from 'apollo-server-plugin-base'
import { AppLockStatus, resolveTimezoneAndPeeks } from 'unwind-server/utils/helpers'

const allowedQueries = ['fetchAppLockStatus', 'enablePeek']
export default {
    requestDidStart(requestContext: WithRequired<
        GraphQLRequestContext<any>,
        'request' | 'context' | 'logger'
    >): GraphQLRequestListener<any> | void {

        return {
            async responseForOperation (requestContext: WithRequired<
                GraphQLRequestContext<any>,
                'metrics' | 'source' | 'document' | 'operationName' | 'operation' | 'logger'
              >): Promise<GraphQLResponse | null> {
                const { headers: { timezone }, uid, prisma, body: { query } } = requestContext.context as { [key: string]: any }
                const gqlObj = gql`
                    ${query}
                  `
                if ((gqlObj.definitions[0] as any)?.name?.value === 'IntrospectionQuery') return null
                const querySet = (gqlObj.definitions[0] as any).selectionSet.selections.map((selection: any) => selection?.name?.value)
                if (querySet.every((value: string) => allowedQueries.includes(value))) return null
                const status = await resolveTimezoneAndPeeks({ timezone, prisma, uid})
                if(status === AppLockStatus.UNLOCKED) return null
                return {
                    data: null,
                    errors: [{
                        message: AppLockStatus.LOCKED,
                    }]
                }
            }
        }

    }
}