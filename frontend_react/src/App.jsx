import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { Toaster } from 'react-hot-toast';
import './App.scss';

const App = () => {
    return (
        <>
            <Toaster
                position='top-right'
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#ffffff',
                        color: '#111827',
                        border: '1px solid #e5e7eb',
                        borderRadius: '10px',
                        padding: '14px 16px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                    },
                    success: {
                        duration: 4000,
                    },
                    error: {
                        duration: 5000,
                    },
                }}
            />
            <div className='app'>
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                <Testimonial />
                <Footer />
            </div>
        </>
    );
};

export default App;
