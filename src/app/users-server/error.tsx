"use client";

import { useEffect } from "react";

export default function Error({error} : {error: string}){
    
    useEffect(() => {
        console.log("Error component");
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500"> Error fetching users data</div>
        </div>
    );

}