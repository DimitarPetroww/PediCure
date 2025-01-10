import { gql } from "@apollo/client";

export const GET_PAGE = gql`
    query GetPage($slug: String!) {
        Pages(where: { slug: { equals: $slug } }) {
            docs {
                slug
                title
                blocks {
                    ... on Banner {
                        id
                        backgroundImage {
                            url
                            fullUrl
                        }
                        heading
                        subheading
                        button {
                            label
                            url
                            type
                            customClass
                        }
                    }
                }
            }
        }
    }

`