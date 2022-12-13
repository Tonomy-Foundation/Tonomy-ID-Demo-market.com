import logo from './logo.svg';
import './App.css';
import { App as TonomyApp, setSettings} from 'tonomy-id-sdk';
import './tonomy.css';
import settings from './settings';

function App() {
  async function onButtonPress() {
    setSettings({ssoWebsiteOrigin: settings.config.ssoWebsiteOrigin});
    
    TonomyApp.onPressLogin({callback: '/callback'});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          market.com (localhost:3001)
        </p>
        <button className="tonomy" onClick={onButtonPress}>Login with Tonomy ID</button>
      </header>
    </div>
  );
}

export default App;
