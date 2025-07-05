type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
};

export default async function fetchApiServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <ul className="space-y-4 p-4">
      {users?.map((user: User) => (
        <li
          key={user.id}
          className="p-4 bg-neutral-800 shadow-md rounded-lg text-gray-100"
        >
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
