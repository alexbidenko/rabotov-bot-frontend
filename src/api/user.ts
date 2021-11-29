import {gql} from 'graphql-tag';
import {UserType} from '../types/common';

export type LoginMutation = { token: string };
export const LOGIN_MUTATION = gql`
    mutation TokenAuth($login: String!, $password: String!) {
        tokenAuth(
            username: $login,
            password: $password
        )
        {
            token
        }
    }
`;

export type GetUserMutation = { payload: UserType };
export const GET_USER_MUTATION = gql`
    mutation VerifyToken($token: String!) {
        verifyToken(
            token: $token
        )
        {
            payload
        }
    }
`;

export type CreateUserMutation = { payload: UserType };
export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($firstName: String!, $lastName: String!, $password: String!, $username: String!, $email: String!) {
        createUser(
            firstName: $firstName,
            lastName: $lastName,
            password: $password,
            username: $username,
            email: $email
        ) {
            user {
                username
            }
        }
    }
`;

export type CreateEmployerMutation = { ok: boolean; message: string };
export const CREATE_EMPLOYER_MUTATION = gql`
    mutation CreateEmployer($companyName: String!, $inn: String!, $isPhysical: Boolean!) {
        createEmployer(
            companyName: $companyName,
            inn: $inn,
            isPhysical: $isPhysical
        )
        {
            ok
            message
        }
    }
`;

export type CreateRecruiterMutation = { ok: boolean; message: string };
export const CREATE_RECRUITER_MUTATION = gql`
    mutation CreateRecruiter {
        createRecruiter
        {
            ok
            message
        }
    }
`;
