import { iUser } from '@/types/UserType';
import React from 'react';
interface iUserDetailPage{
    params: Promise<{ userId: string }>
}

const userDetailPage = async({params}: iUserDetailPage ) => {
    const {userId} = await params;
    const res = await fetch(`http://localhost:5000/users/${userId}`)
    const user: Promise<iUser> = res.json();

    return (
        <div>
            <h2>User deatails of: {(await user).name} </h2>
        </div>
    );
};

export default userDetailPage;