import React, { useState, useEffect } from 'react'
import Content from './Content'
import UserNameChange from './UserNameChange'

import { Container, Card } from 'react-bootstrap'

function App() {
  type UserType = {
    name: string
    age: number
    address: string
  }
  const [user, setUser] = useState<UserType>({ name: '', age: 0, address: '' })
  const fetchData = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const randomUser = await response.json()
    const data = randomUser.results[0]

    setUser({
      ...user,
      name: `${data.name.first} ${data.name.last}`,
      age: data.dob.age,
      address: `${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.country}`,
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      name: e.target.value,
    })
  }

  return (
    <>
      <Container>
        <Card style={{ margin: '50px 0' }}>
          <Content name={user.name} age={user.age} address={user.address} />
          <UserNameChange name={user.name} onNameChange={handleChange} />
        </Card>
      </Container>
    </>
  )
}

export default App
