import { GET_PAGE } from "./pages.gql";

import { Block } from '@repo/types';
import { Page } from '$/payload-types';
import { client } from "../apollo";

export type PageType = Pick<
    Page,
    'slug' | 'title'
> & { blocks: Block[] }

export async function getPage(slug: string): Promise<PageType[]> {
    const { loading, error, data } = await client.query<{ Pages: { docs: PageType[] } }>({
        query: GET_PAGE,
        variables: { slug }
    });

    //TODO error and loading handling

    return data?.Pages?.docs || [];
}