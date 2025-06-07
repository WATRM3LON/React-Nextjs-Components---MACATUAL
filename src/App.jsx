import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Loading(){
  return(
    <div class="loading"></div>
  )
}

function FCard(){
  return(
    <div class="cards">
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
          <StudentInfo />
          <WelcomeCard name="Gio" />
          <Counter />
          
        </div>
    </div>
  )
}

function Apps() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Loading />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

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
    <div>
      <div><Loading /></div>
      <div><FCard /></div>
     </div>
  );
}


export default App
