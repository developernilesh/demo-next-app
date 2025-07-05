"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
};

export default function fetchApiClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Error fetching users data");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError("Error fetching users data");
      if (error instanceof Error) {
        setError(`Error fetching users data: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  if (error) return <div className="text-center text-red-400">{error}</div>;

  return (
    <ul className="space-y-4 p-4">
      {users.map((user: User) => (
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
