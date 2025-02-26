import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log('Session', session);

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={signIn}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {session.user && (
        <>
          <h1 className="text-3xl font-bold mb-4">{session.user.name}</h1>
          <img
            className="rounded-full mb-4"
            src={session.user.image}
            alt="User Image"
            width={100}
            height={100}
          />
          <h1 className="text-xl text-gray-700">{session.user.email}</h1>
          <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={signOut}>Logout</button>
        </>
      )}
    </div>
  );
}
