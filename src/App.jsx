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
  const [count, setCount] = useState(0);

  const renderView = () => {
    switch (view) {
      case 'welcome':
        return <WelcomeCard name={name} switchView={setView} count={count} />;
      case 'info':
        return <StudentInfo switchView={setView} setName={setName} />;
      case 'counter':
        return <Counter switchView={setView} count={count} setCount={setCount} />;
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


function WelcomeCard({ name, switchView, count}) {
  return (
    <>
    <div className="button1">
      <button onClick={() => switchView('info')}>Student Info</button>
      <button onClick={() => switchView('counter')}>Counter</button>
    </div>
    <div className='welcometext'>
      <h2>Welcome, {name}!</h2>
      <h4>Age (Counter): {count}</h4>
      <p>Glad to have you here.</p>
    </div>
    </>
    
  );
}

function Counter({ switchView, count, setCount }) {
  return (
    <>
      <div className="button1">
        <button onClick={() => switchView('info')}>Student Info</button>
        <button onClick={() => switchView('welcome')}>Welcome Card</button>
      </div>
      <div className='counter'>
        <h3>Age (Counter): {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
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
    switchView('welcome');
  };

  return (
    <>
      <div className="button1">
        <button onClick={() => switchView('welcome')}>Welcome Card</button>
        <button onClick={() => switchView('counter')}>Counter</button>
      </div>
      <form onSubmit={handleSubmit} className='studentinfo'>
        <h3>Student Info</h3>
        <input
          type="text"
          placeholder="Name"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
