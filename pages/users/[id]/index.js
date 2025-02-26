import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const UserInfoPage = () => {
    const [userInfo, setUserInfo] = useState([]);   
    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;
        if (!id) return; // Ensure `id` exists before fetching

        async function getUserId() {
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            const data = await response.json();
            setUserInfo(data);
        }

        getUserId();
    }, [router.query.id]);

    return (
        <div>
            <h1>{userInfo?.firstName || "Loading..."}</h1>
        </div>
    );
};

export default UserInfoPage;
