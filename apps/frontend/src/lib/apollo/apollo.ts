import { ApolloClient, ApolloError, InMemoryCache } from "@apollo/client";

export interface GraphQLResponse<D> {
    data: D
    loading: boolean
    error: ApolloError | undefined
}

const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
});

export default client;