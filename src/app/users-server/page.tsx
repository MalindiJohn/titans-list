interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersServer() {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const res  = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await res.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map((user: User) => (
                <li 
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </li>
            ))}
        </ul>
    );
}