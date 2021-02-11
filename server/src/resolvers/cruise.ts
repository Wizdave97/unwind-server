import { ContextInterface, ParentInterface } from "unwind-server/types";

export const creator = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.cruise.findUnique({
        where: {
            id: parent.id
        }
    }).creator()
}