import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/getUsers';

function GetUsers() {
  const { error, loading, data} = useQuery(GET_ALL_USERS)


  useEffect(() => {
      console.log(data)
    //   effect
    //   return () => {
    //       clear effect
    //   }
  }, [data]);

  return (
    <div>getUsers</div>
  )
}

export default GetUsers;