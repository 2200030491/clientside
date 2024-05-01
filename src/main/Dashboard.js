import React from 'react';
import UserBar from './UserBar';

const Dashboard = () => {
  // Hard-coded data for demonstration
  const accounts = [
    { id: 1, type: 'Savings', balance: 5000 },
    { id: 2, type: 'Checking', balance: 3000 },
    { id: 3, type: 'Investment', balance: 10000 },
  ];

  return (
    <>
    <UserBar/>
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1>Finance Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Accounts Summary</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {accounts.map(account => (
            <li key={account.id} style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>{account.type}</span>
              <span>${account.balance}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <h2>Transaction History</h2>
        <p>No recent transactions.</p>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
