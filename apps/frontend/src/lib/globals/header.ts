import { Header } from '@repo/types';

import { GET_HEADER_SETTINGS } from "./header.gql";
import { client } from "../apollo";
import { GraphQLResponse } from "../apollo/apollo";

export type HeaderType = Pick<
    Header,
    'phone' | 'address' | 'facebookLink'
>

export interface HeaderResponse extends GraphQLResponse<HeaderType> {}

export async function getHeaderSettings(): Promise<HeaderResponse> {
    const { loading, error, data } = await client.query<{ Header: HeaderType }>({
        query: GET_HEADER_SETTINGS,
    });

    return { data: data?.Header, loading, error };
}