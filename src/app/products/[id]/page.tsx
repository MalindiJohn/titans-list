// export default async function Product({params}: {params: {id: string}}){

//     const { id } =  await params;

//     return <h1>Product: {id}</h1>
// }

export default async function Product({ params }: { params: { id: string } }) {
    const { id } = params; // No need for `await` here

    return <h1>Product: {id}</h1>;
}