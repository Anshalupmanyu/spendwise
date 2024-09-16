import React from 'react';
import '../styles/Balance.css'

const Balance = () => {
    return (
        <section class="balance">
        <div class="balance-box">
            <div class="balance-details">
                <div class="balance-item">
                    <p>Account: 00</p>
                </div>
                <div class="balance-item">
                    <p>Cash: 00</p>
                </div>
                <div class="balance-item">
                    <p>Savings: 00</p>
                </div>
            </div>
        </div>
    </section>            
    );
};

export default Balance;