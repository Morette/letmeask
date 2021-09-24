import illustarionImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export const Home = () => {
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
          <button className="create-room">
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
