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
                        mobileBackgroundImage {
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
                    ... on About { 
                        id
                        title
                        images {
                            image {
                                url
                                fullUrl
                            }
                            altText
                        }
                        paragraph
                    }
                    ... on Services {
                        id
                        title
                        services { 
                            image {
                                fullUrl
                            }
                            heading
                            paragraph
                        }
                    }
                    ... on WhyChooseUs {
                        id
                        title
                        paragraph
                        carouselImages {
                            image {
                                fullUrl
                            }
                        }
                    }
                    ... on Pricelist {
                        backgroundImage {
                            fullUrl
                        }
                        title
                        pricelists {
                            serviceGroup
                            services {
                                serviceName
                                servicePrice
                            }
                        }
                    }
                }
            }
        }
    }

`