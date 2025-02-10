import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

interface User {
    id: number;
    name: string;
}

export default async function MockUsers() {

    const authObj = await auth();

    const userObj = await currentUser();

    console.log({
        authObj,
        userObj
    })

    const res  = await fetch("https://67a8bec86e9548e44fc1e6d8.mockapi.io/users");

    if (!res.ok) {
        throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
    }

    const users = await res.json();

    async function addUser(formData: FormData) {

        "use server"

        const name  = formData.get("name");

        console.log(name);

        const res = await fetch("https://67a8bec86e9548e44fc1e6d8.mockapi.io/users", {
            method: "POST",
            body: JSON.stringify({ name }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error(`Failed to add user: ${res.status} ${res.statusText}`);
        }

        console.log(`Response ${res}`);

        const newUser = await res.json();

        revalidatePath("/mock-users");

        console.log(newUser);
    }

    return (
        <div className="py-10">
            
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="text-black border p-2 mr-2 rounded" />
                <button 
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add User
                </button>
            </form>

            <div className="grid grid-cols-4 gap-4 py-10">
                {users.map((user: User) => (
                    <div 
                        key={user.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}