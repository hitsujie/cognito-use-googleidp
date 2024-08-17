import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser } from 'aws-amplify/auth';

const ProtectedPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser();
        // ユーザーが認証されている場合、このページを表示
      } catch {
        // ユーザーが認証されていない場合、ログインページにリダイレクト
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  return <div>This is a protected page</div>;
};

export default ProtectedPage;
