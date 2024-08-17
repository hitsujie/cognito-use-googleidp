import { Authenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Login() {
  const router = useRouter();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    if (authStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [authStatus, router]);

  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <div>
          <h1>Login successful</h1>
          <p>Redirecting to dashboard...</p>
        </div>
      )}
    </Authenticator>
  );
}
