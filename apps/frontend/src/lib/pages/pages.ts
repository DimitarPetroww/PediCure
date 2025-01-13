import { Block, Page } from '@repo/types';

import { GET_PAGE } from "./pages.gql";
import { client } from "../apollo";
import { GraphQLResponse } from "../apollo/apollo";

export type PageType = Pick<
    Page,
    'slug' | 'title'
> & { blocks: Block[] }

export interface PageResponse extends GraphQLResponse<PageType[]> {}

export async function getPage(slug: string): Promise<PageResponse> {
    const { loading, error, data } = await client.query<{ Pages: { docs: PageType[] } }>({
        query: GET_PAGE,
        variables: { slug }
    });

    return { data: data?.Pages.docs, loading, error };
}