import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/getUsers';

function GetUsers() {
  const { error, loading, data} = useQuery(GET_ALL_USERS)
  return (
    <div>getUsers</div>
  )
}

export default GetUsers;