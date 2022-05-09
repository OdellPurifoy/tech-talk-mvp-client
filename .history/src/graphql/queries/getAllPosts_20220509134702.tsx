import { gql } from '@apollo/client';

export const GET_ALL_POSTS =  gql`
{
  posts {
    title
    body
    userId
  }
}
`