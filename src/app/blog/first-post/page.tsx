import { useRouter } from "next/router";

export default function FirstPost() {

    const router = useRouter();

    return (
        <div>
            <h1>First Post</h1>
            <button onClick={() => router.push('/')} className="bg-blue-500 text-white p-2 rounded-md">Go home</button>
        </div>
    );
}
