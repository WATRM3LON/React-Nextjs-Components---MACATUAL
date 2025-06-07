import { useState } from 'react'
import './App.css'


function Loading(){
  return(
    <div className="loading"></div>
  )
}

function FCard() {
  const [view, setView] = useState('info');
  const [name, setName] = useState('Student');

  const renderView = () => {
    switch (view) {
      case 'welcome':
        return <WelcomeCard name={name} switchView={setView} />;
      case 'info':
        return <StudentInfo switchView={setView} setName={setName} />;
      case 'counter':
        return <Counter switchView={setView} />;
      default:
        return null;
    }
  };

  return (
    <div className="cards">
      <div className='Fcardtext'>
        {renderView()}
      </div>
    </div>
  );
}


function WelcomeCard({ name, switchView}) {
  return (
    <>
    <div className="button1">
      <button onClick={() => switchView('info')}>Student Info</button>
      <button onClick={() => switchView('counter')}>Counter</button>
    </div>
    <div className='welcometext'>
      <h2>Welcome, {name}!</h2>
      <p>Glad to have you here.</p>
    </div>
    </>
    
  );
}

function Counter({ switchView }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="button1">
        <button onClick={() => switchView('info')}>Student Info</button>
        <button onClick={() => switchView('welcome')}>Welcome Card</button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '0.5rem' }}>Decrement</button>
      </div>
    </>
  );
}
function StudentInfo({ switchView, setName }) {
  const [email, setEmail] = useState('');
  const [localName, setLocalName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(localName)
    alert(`Student Name: ${localName}\nEmail: ${email}`);
  };

  return (
    <>
      <div className="button1">
        <button onClick={() => switchView('welcome')}>Welcome Card</button>
        <button onClick={() => switchView('counter')}>Counter</button>
      </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <h3>Student Info</h3>
        <input
          type="text"
          placeholder="Name"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
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
    </>
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
