import React, { useEffect, useState } from 'react';
import { JWTLoginPayload } from 'tonomy-id-sdk';
import { SdkErrors, throwError, UserApps } from 'tonomy-id-sdk';
import settings from '../settings';
import './callback.css';

export default function CallBackPage() {
    const [payload, setPayLoad] = useState<JWTLoginPayload>();
    const [name, setName] = useState<string>();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const accountName = params.get('accountName');
        const jwt = params.get('request');

        if (!accountName) throwError("accountName parameter doesn't exists", SdkErrors.MissingParams);
        if (!jwt) throwError("request parameter doesn't exists", SdkErrors.MissingParams);
        verifyLogin(accountName, jwt);
        setName(accountName);
    }, []);

    async function verifyLogin(accountName: string, jwt: string) {
        const verifiedJWT = await UserApps.verifyLoginJWT(jwt);
        const verifiedLoginSso = await UserApps.verifyPrivateKey(accountName);
        console.log(verifiedLoginSso);
        if (verifiedLoginSso && verifiedJWT) {
            setPayLoad(verifiedJWT.payload as JWTLoginPayload);
        }
    }

    const showJwt = () => {
        if (!payload) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div>
                    <h1>Logged in</h1>
                    <h2>Account: {name}</h2>
                    <div className="code">
                        <span className="braces">&#123;</span>
                        {Object.entries(payload).map(([key, value]) => {
                            return (
                                <div className="code-line">
                                    <div className="key">{key}:&nbsp;</div>
                                    <div className="value">"{value}"</div>
                                </div>
                            );
                        })}
                        <span className="braces">&#125;</span>
                    </div>

                    <a
                        className="btn"
                        href={'https://local.bloks.io/account/' + name + '?nodeUrl=' + settings.config.blockchainUrl}
                    >
                        Check in blockchain
                    </a>
                </div>
            );
        }
    };
    return <div>{showJwt()}</div>;
}
