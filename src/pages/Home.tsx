import { useContext } from 'react';
import { useHistory } from 'react-router';

import { Button } from '../components/Button';
import { AuthContext } from '../App';

import illustarionImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext);

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle();
    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustarionImg} alt="Illustration about Q&A" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer your audience in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Create your room with Google
          </button>
          <div className="separator">or enter in a room</div>
          <form>
            <input type="text" placeholder="Input room number" />
            <Button type="submit">Enter room</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
