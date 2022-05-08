import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/getAllUsers';

function GetUsers() {
  const { data } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // setUsers(data.users[0]);
    console.log(data.users)
  }, [data]);

  return (
    <div>{users.map((user) => {
      return <h1></h1>
    })}</div>
  )
}

export default GetUsers;