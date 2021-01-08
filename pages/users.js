import {useEffect, useState} from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    
    console.log(users)

    return(
        <MainContainer keywords="users">

            <div className='content'>    
                <h1>Users</h1>
                <ul>
                    {users.map(user =>
                    
                    <li key={user.id}>
                        <Link href = {`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
        </MainContainer>
    );
    
}

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
      props: {users}, // will be passed to the page component as props
    }
  }
  