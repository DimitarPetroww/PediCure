import { ApolloError } from "@apollo/client";

import { Block, Page } from '@repo/types';

import { GET_PAGE } from "./pages.gql";
import { client } from "../apollo";

export type PageType = Pick<
    Page,
    'slug' | 'title'
> & { blocks: Block[] }

export interface PageResponse {
    data: PageType[]
    loading: boolean
    error: ApolloError | undefined
}

export async function getPage(slug: string): Promise<PageResponse> {
    const { loading, error, data } = await client.query<{ Pages: { docs: PageType[] } }>({
        query: GET_PAGE,
        variables: { slug }
    });

    return { data: data?.Pages.docs, loading, error };
}