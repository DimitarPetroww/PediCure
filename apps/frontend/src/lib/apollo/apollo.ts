import { ApolloClient, InMemoryCache } from "@apollo/client";

export interface ApolloGraphQLError {
    message: string;
    path?: string[];
    extensions?: Record<string, any>
}

const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
});

export default client;