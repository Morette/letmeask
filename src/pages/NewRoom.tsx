import { Link } from 'react-router-dom';

import { Button } from '../components/Button';

import illustarionImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';

export const NewRoom = () => {
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
          <h2>Create a new room</h2>
          <form>
            <input type="text" placeholder="Room name" />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Want to enter in an existing room? <Link to="/">cliquei aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};
