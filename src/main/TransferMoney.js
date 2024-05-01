import React, { useState } from 'react';
import UserBar from './UserBar';

const TransferMoney = () => {
  const [formData, setFormData] = useState({
    sender: '',
    recipient: '',
    amount: '',
    message: ''
  });

  const [transferSuccess, setTransferSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle money transfer, such as sending the data to a server
    console.log(formData);
    // Simulate a successful transfer
    setTransferSuccess(true);
    // Reset form data
    setFormData({
      sender: '',
      recipient: '',
      amount: '',
      message: ''
    });
    // Reset success message after 3 seconds
    setTimeout(() => {
      setTransferSuccess(false);
    }, 3000);
  };

  return (
    <>
    <UserBar/>
    <div style={styles.container}>
      <h2 style={styles.heading}>Money Transfer</h2>
      {transferSuccess && (
        <div style={styles.successMessage}>Transfer successful!</div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="sender" style={styles.label}>Sender:</label>
          <input
            type="text"
            id="sender"
            name="sender"
            value={formData.sender}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="recipient" style={styles.label}>Recipient:</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="amount" style={styles.label}>Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>Transfer</button>
      </form>
    </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  successMessage: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '4px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '100px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TransferMoney;
