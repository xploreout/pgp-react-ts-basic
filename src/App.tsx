import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Container>
        <Card style={{ margin: '50px 0' }}>
          <div
            className='col-sm-10 mt-lg-10'
            style={{ backgroundColor: 'pearl' }}
          >
            <div style={{ paddingLeft: '20px' }}>Name: {user.name}</div>
            <div style={{ paddingLeft: '20px' }}>Age: {user.age}</div>
            <div style={{ paddingLeft: '20px' }}>Address: {user.address}</div>
            <label style={{ paddingLeft: '20px' }}>Update Name: </label>
            <input
              type='text'
              name='name'
              placeholder={user.name}
              onChange={handleChange}
              style={{ paddingLeft: '10px' }}
            ></input>
          </div>
        </Card>
      </Container>
    </>
  )
}

export default App
