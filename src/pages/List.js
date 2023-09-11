import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const userList = () => {
    const users = [
        {email: 'user1@example.com', name: '홍길동'},
        {email: 'user2@example.com', name: '이순신'},
        {email: 'user3@example.com', name: '김유신'},
        {email: 'user4@example.com', name: '이율곡'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <User userData={user} key={user.name}/>)}
            </tbody>

        </table>
    );
}

export default userList;