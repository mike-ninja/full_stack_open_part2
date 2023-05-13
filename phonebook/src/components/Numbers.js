const Numbers = (props) => {

  console.log(props.contacts)
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {props.contacts.map( contact =>
          <li key={contact.name}>
            {contact.name} {contact.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Numbers
