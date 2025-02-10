const users = [
    {id: 1, name: "Malindi John"},
    {id: 2, name: "Mary Mutuku"}
];

async function GET(){

    return Response.json(users);
}

async function POST(request: Request){

    const user = await request.json();

    const newUser = {
        id: users.length + 1,
        name: user.name
    };

    users.push(newUser);

    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })

}

export  { GET, POST, users };