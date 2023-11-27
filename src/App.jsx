import { useCallback, useMemo, useState } from 'react'
import './App.css'

import Person from './components/Person'
import { expensiveCalculation } from './utils/expensiveCalculation';
import { getPeople } from './utils/getPeople';

function App() {
  const [name, setName] = useState('');

  // const result = expensiveCalculation(1)
  const result = useMemo(() => expensiveCalculation(1), [])

  // const handleClick = (newName) => setName(newName);
  const handleClick = useCallback((newName) => setName(newName), []);

  // const people = getPeople();
  const people = useMemo(() => getPeople(), []);

  return (
    <>
      <h1>The winner is: {name}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {
          people.map((person) => <Person key={person.name} person={person} onClick={handleClick} />)
        }
        <span>{result}</span>
      </div>
    </>
  )
}

export default App
