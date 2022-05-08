import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/getAllUsers';

function GetUsers() {
  const { data } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  return (
    <div>
    {" "}
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
    })}
    </div>
  )
}

export default GetUsers;