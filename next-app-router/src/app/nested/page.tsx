import { Button } from "@/components/button";
import { Counter } from "@/components/counter";
import { UserList } from "@/components/user-list";

export type User = {
  id: number;
  name: string;
};

function sleep(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function getUsers() {
  await sleep();

  const users = [
    {
      id: 1,
      name: "asd",
    },
    {
      id: 2,
      name: "alskd",
    },
    {
      id: 3,
      name: "lasdmkldsalmkdas",
    },
  ] satisfies User[];

  return users;
}

const ServersideUsers = ({ users }: { users: User[] }) => {
  return (
    <>
      {users.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
          <span>[id:{id}]</span>
        </div>
      ))}
    </>
  );
};

export default async function Page() {
  const users = await getUsers();

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <Button>Lorem Ipsum</Button>
        <Counter />
      </div>

      <div className="mt-8 border-t-2 p-2">
        <h3>List of users 🗣️</h3>

        <UserList initialUsers={users}>
          <ServersideUsers users={users} />
        </UserList>
      </div>
    </>
  );
}
