import { gql } from "@apollo/client";

export const GET_HEADER_SETTINGS = gql`
    query GetHeaderSettings {
        Header {
            phone {
                label
                value
            }
            address {
                label
                value
            }
            facebookLink
        }
    }
`;