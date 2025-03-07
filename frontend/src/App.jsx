import { useState } from 'react';
import './App.css';

function App() {
  // State variables to manage user input and messages
  const [name, setName] = useState(''); // Holds user's name
  const [message, setMessage] = useState(''); // Holds the greeting message or error message
  const [isError, setIsError] = useState(false); // Tracks if there is an error

  // Function to fetch greeting from the server
  const fetchGreeting = async () => {
    if (!name) {
      setMessage('Name is required.'); // Error message if name is not provided
      setIsError(true);
      return;
    }
    try {
      const response = await fetch(
        `https://greeting-app-ewbq.onrender.com/api/greet?name=${name}`
      );
      const data = await response.json();
      if (data.error) {
        setMessage(data.error);
        setIsError(true);
      } else {
        setMessage(data.message);
        setIsError(false);
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log any fetch errors
      setMessage('Error fetching greeting.');
      setIsError(true);
    }
  };

  // Function to handle key press events
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchGreeting();
    }
  };

  return (
    <div className='container'>
      <h1>Welcome to Younglabs</h1>
      <p>Enter your name to receive a personalized greeting</p>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={fetchGreeting}>Get Greeting</button>
      {message && (
        <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p> // Display message based on success or error
      )}
    </div>
  );
}

export default App;
