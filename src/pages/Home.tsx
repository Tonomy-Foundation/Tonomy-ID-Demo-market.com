import React from 'react';
import { App as TonomyApp, setSettings } from 'tonomy-id-sdk';
import settings from '../settings';
import './tonomy.css';

setSettings({
    blockchainUrl: settings.config.blockchainUrl,
});

const styles = {
    container: {
        flex: 1,
        textAlign: 'center' as const,
        alignSelf: 'center',
    },
};

function Home() {
    async function onButtonPress() {
        setSettings({ ssoWebsiteOrigin: settings.config.ssoWebsiteOrigin });

        TonomyApp.onPressLogin({ callbackPath: '/callback' });
    }

    return (
        <div style={styles.container}>
            <p>market.com</p>
            <button className="tonomy" onClick={onButtonPress}>
                Login with {settings.config.appName}
            </button>
        </div>
    );
}

export default Home;
