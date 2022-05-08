import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/getAllUsers';

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
    <div></div>
  )
}

export default GetUsers;