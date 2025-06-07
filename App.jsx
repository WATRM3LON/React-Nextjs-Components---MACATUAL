import { useState } from 'react';

function WelcomeCard({ name }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>Welcome, {name}!</h2>
      <p>Glad to have you here.</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '0.5rem' }}>Decrement</button>
    </div>
  );
}

function StudentInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Name: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <h3>Student Info</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem' }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <WelcomeCard name="Gio" />
      <Counter />
      <StudentInfo />
    </div>
  );
}

export default App;
