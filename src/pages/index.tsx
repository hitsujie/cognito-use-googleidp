import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Home() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <div>
      <h1>Welcome to Our App</h1>
      <p>This is the index page. You can navigate to other pages from here.</p>
      <Link href="/login">
        Go to Login
      </Link>
    </div>
  );
}
