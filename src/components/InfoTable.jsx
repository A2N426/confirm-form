"use client"

const InfoTable = ({ user }) => {
    console.log(user)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InfoTable;