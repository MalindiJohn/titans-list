import { use } from "react";
 
// export default async function Product({params}: {params: {id: string}}){

//     const { id } =  await params;

//     return <h1>Product: {id}</h1>
// }

export default function Product({params}: {params: Promise<{id: string}>}){

    const { id } =  use(params);

    return <h1>Product: {id}</h1>
}