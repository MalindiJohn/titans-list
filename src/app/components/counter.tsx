// implement a basic counter
"use client";
import React, { useState } from 'react';
import { useAuth, useUser } from "@clerk/nextjs";

export default function Counter() {

  // const { isLoaded, userId, sessionId, getToken } = useAuth();

  const { isLoaded, isSignedIn, user } = useUser();

    console.log("Counter component");

  const [count, setCount] = useState(0);

  if(!isLoaded || !isSignedIn) {

    return null;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Clicked Me</button>
    </div>
  );
}