const { GraphQLScalarType, Kind } = require('graphql');

export const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: any) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: any) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const MAX_INT = 2147483647
const MIN_INT = -2147483648
const coerceIntString = (value: any) => {
  if (Array.isArray(value)) {
    throw new TypeError(`IntString cannot represent an array value: [${String(value)}]`)
  }
  if (Number.isInteger(value)) {
    if (value < MIN_INT || value > MAX_INT) {
      throw new TypeError(`Value is integer but outside of valid range for 32-bit signed integer: ${String(value)}`)
    }
    return value
  }
  return String(value)
}

export const intString = new GraphQLScalarType({
  name: 'IntString',
  serialize: coerceIntString,
  parseValue: coerceIntString,
  parseLiteral(ast: any) {
    if (ast.kind === Kind.INT) {
      return coerceIntString(parseInt(ast.value, 10))
    }
    if (ast.kind === Kind.STRING) {
      return ast.value
    }
    return null
  }
})

export const mode = new GraphQLScalarType({
  name: 'Mode',
  serialize: (value: any) => {
    if(value !== 'insensitive') throw new TypeError('Only value allowed is insensitive')

    return value
  },
  parseValue: (value: any) => {
    if(value !== 'insensitive') throw new TypeError('Only value allowed is insensitive')

    return value
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.STRING && ast.value === 'insensitive') {
      return ast.value
    }
    return null
    //throw new TypeError('Only value allowed is insensitive')
  }
})

