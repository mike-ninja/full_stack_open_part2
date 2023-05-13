import { useState } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

function App() {
  const [contacts, setContact] = useState([
    {
      name: 'Carl Marx',
      number: '04578347332',
    },
    {
      name: 'Aaron Clunk',
      number: '04578347213',
    },
    {
      name: 'Richard Gaylor',
      number: '04578323123',
    },
    {
      name: 'Amazon Crime',
      number: '04578340341',
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    console.log(newName, "Duplicate: ", contacts.map(item => item.name).includes(newName))
    if (!contacts.map(item => item.name).includes(newName)) {
      const newContact = {
        name: newName,
        number: newNumber,
      }
      setContact(contacts.concat(newContact))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already a contact!`)
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const setFilterInput = (event) => {
    setFilter(event.target.value)
  }

  const filteredShow = contacts.filter(contact => contact.name.indexOf(filter) !== -1)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} eventHandler={setFilterInput} />
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addContact={addContact}/>
      <Numbers contacts={filteredShow}/>
    </div>
  );
}

export default App;
