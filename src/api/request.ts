import {RequestType} from '../types/common';
import {gql} from 'graphql-tag';

export type RequestsQuery = { vacancies: RequestType[] };
export const REQUESTS_QUERY = gql`
    query Vacancies {
        vacancies {
            id
            vacancyName
            companyName
            duties
            requirements
            conditions
            creationDate
            recruiterReward
            active
            creator {
                id
                user {
                    username
                }
            }
            city {
                id
                cityName
            }
            category {
                id
                categoryName
            }
            level
        }
    }
`;

export type CreateRequestQuery = { ok: boolean; message: string };
export const CREATE_REQUEST_QUERY = gql`
    mutation CreateVacancy(
        $category: String!
        $city: String!
        $companyName: String!
        $conditions: String!
        $duties: String!
        $payLevel: String! #enum поле LIGHT, MEDIUN, HARD, PRO
        $recruiterReward: Int!
        $requirements: String!
        $vacancyName: String!
    ) {
        createVacancy(
            category: $category
            city: $city
            companyName: $companyName
            conditions: $conditions
            duties: $duties
            payLevel: $payLevel
            recruiterReward: $recruiterReward
            requirements: $requirements
            vacancyName: $vacancyName
        ) {
            ok
            message
        }
    }
`;
