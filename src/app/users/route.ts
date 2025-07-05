export const users = [
  { id: 1, userName: "John Doe" },
  { id: 2, userName: "Jay Smith" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = {
    id: users.length + 1,
    userName: user.userName,
  };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
