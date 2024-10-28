import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login');
      return;
    }

    const fetchUser = async () => {
      const res = await fetch('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        localStorage.removeItem('token'); 
        router.push('/login');
      }
    };

    fetchUser();
  }, [router]);

  const Logout = () => {
    localStorage.removeItem('token');
    router.push('/Login');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Email: {user.email}</p>
      <button onClick={Logout} className="ring-2 ring-black bg-slate-800 text-white">Logout</button>
    </div>
  );
};

export default Profile;
