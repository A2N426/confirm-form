"use client"

const InfoTable = ({ user }) => {
    console.log(user)
    return (
        <tbody>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
            </tr>
        </tbody>
    );
};

export default InfoTable;