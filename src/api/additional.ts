import gql from 'graphql-tag';
import {CategoryType, CityType} from '../types/common';

export type CitiesQuery = CityType[];
export const CITIES_QUERY = gql`
    query Cities {
        cities(search: "ново"){
            cityName
            id
        }
    }
`;

export type CategoriesQuery = CategoryType[];
export const CATEGORIES_QUERY = gql`
    query Categories{
        categories {
            categoryName
            id
        }
    }
`;
