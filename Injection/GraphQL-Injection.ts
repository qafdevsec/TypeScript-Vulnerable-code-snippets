/*
Type Of Vulnerability : GraphQL Injection
CWE : CWE-89
*/


import { graphql, GraphQLSchema } from 'graphql';
import {
  InvalidRequestError,
  ModerationNudgeError,
  CustomErrorType, // Define CustomErrorType as per your error types
} from './errorTypes'; // Import your custom error types

interface GraphQLRequest {
  text: string;
}

interface GraphQLResponse {
  data?: any;
  errors: CustomErrorType[]; // CustomErrorType should match your error structure
}

async function executeGraphQLQuery(
  schema: GraphQLSchema,
  request: GraphQLRequest,
  rootValue: any,
  contextValue: any,
  variables: any
): Promise<GraphQLResponse> {
  return graphql(schema, request.text, rootValue, contextValue, variables).then( //Source and Sink
    (payload) => {
      if (payload.errors) {
        payload.errors.forEach((e) => {
          // Throw our custom errors directly.
          if (
            e.originalError instanceof InvalidRequestError ||
            e.originalError instanceof ModerationNudgeError
          ) {
            throw e.originalError;
          }
        });
        throw new Error(payload.errors.toString());
      }
      return {
        data: payload.data || undefined,
        errors: payload.errors || [],
      };
    }
  );
}
