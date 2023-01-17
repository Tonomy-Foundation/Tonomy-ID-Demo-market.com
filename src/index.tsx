import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Container } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './routes/root';

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
    },
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Container maxWidth="sm" style={styles.container}>
            <RouterProvider router={router}></RouterProvider>
        </Container>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
