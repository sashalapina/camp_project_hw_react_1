import './App.css'
import { useState } from 'react'
import { Greeting } from './greet'
import { UserCard } from './userCard';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && age) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setAge('');
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <UserCard name={name} age={age} onReset={handleReset} />) : (
          <Greeting name={name} setName={setName} age={age} setAge={setAge} onSubmit={handleSubmit} />
        )}
    </div>
  )
}

export default App
