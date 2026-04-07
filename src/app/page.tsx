import { getUsers } from "../lib/users";

export default async function Home() {
  const data = await getUsers();
  return (
    <>
      <h1>Hello, Next.js!</h1>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
      <h1>Hello, Next.js!</h1>
    </>
  );
}
