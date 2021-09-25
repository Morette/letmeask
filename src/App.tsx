import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth } from './services/firebase';

import './styles/global.scss';

type AuthContextType = {
  user: UserType | undefined;
  signInWithGoogle: () => Promise<void>;
};

type UserType = {
  id: string;
  name: string;
  avatar: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function App() {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, photoURL } = user;

        if (!displayName || !photoURL) throw new Error('Missing information from Google Account');

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });
  }, []);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const signIn = await signInWithPopup(auth, provider);

    if (signIn.user) {
      const { uid, displayName, photoURL } = signIn.user;

      if (!displayName || !photoURL) throw new Error('Missing information from Google Account');

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
