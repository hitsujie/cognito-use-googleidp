import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signOut } from "aws-amplify/auth";

export default function Dashboard() {
  const { authStatus, user } = useAuthenticator((context) => [context.authStatus, context.user]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    async function checkAuthStatus() {
      if (authStatus === 'configuring') {
        return;
      }

      if (authStatus !== 'authenticated' && !isNavigating) {
        setIsNavigating(true);
        await router.push("/login");
      } else {
        setIsLoading(false);
      }
    }

    checkAuthStatus();
  }, [authStatus, router, isNavigating]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (authStatus !== 'authenticated') {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsNavigating(true);
      await router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.username || 'User'}</p>
      <button onClick={() => router.push("/")}>Go to Home</button>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
