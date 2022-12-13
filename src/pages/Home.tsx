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

        TonomyApp.onPressLogin({ callbackPath: '/callback', redirect: false });
    }

    return (
        <div style={styles.container}>
            <p>market.com (localhost:3001)</p>
            <button className="tonomy" onClick={onButtonPress}>
                Login with Tonomy ID
            </button>
        </div>
    );
}

export default Home;
