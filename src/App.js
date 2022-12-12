import logo from './logo.svg';
import './App.css';
import { App as TonomyApp} from 'tonomy-id-sdk';

function App() {
  async function onButtonPress() {
    // change so that redirect is true by default
    TonomyApp.onPressLogin({callback: '/callback', window});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          market.com (localhost:3001)
        </p>
        <button onClick={onButtonPress}>Login with Tonomy ID</button>
      </header>
    </div>
  );
}

export default App;
