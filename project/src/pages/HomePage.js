import React from 'react';
import Navbar from '../components/Navbar'
import Balance from '../components/Balance'
import Dashboard from '../components/Dashboard'

function HomePage() {
    return (
        <div className='HomePage'>
            <Navbar />
            <Balance />
            <Dashboard />
        </div>

    );
}

export default HomePage;