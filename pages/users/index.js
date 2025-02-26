import {useEffect, useState} from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).response.then(response.josn);

const UserPage = () => {

const {data, error} = useSWR(`https://dummyjson.com/users`, fetcher);

if(error){
    return <div>Failed to load</div>
}

if(!data){
    return <div>Loading...</div>
}
    // const [users, setUsers]= useState([]);

    // console.log("Users",users);

    // useEffect(() => {
    //     async function fetchUsers() {
    //         const data = await fetch("https://dummyjson.com/users");
    //         setUsers(await data.json()); 
    //     }
    //     fetchUsers();
    // },[])

    return(
        <div className="container text-center mt-10">
            <h1>All Users</h1>
            {
                data.users && 
                data.users.users && data.users.users.map((users) =>(
                    <Link href={`users/${users.id}`} key={users.id}>
                        <div>{users.firstName}</div>
                        </Link>
                ))
            }
        </div>
    )
}

export default UserPage;