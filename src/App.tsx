import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card, Alert } from 'react-bootstrap'

function App() {
  type UserType = {
    name: string
    age: number
    address: string
  }
  const [user, setUser] = useState<UserType>({} as UserType)
  const fetchData = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const randomUser = await response.json()
    const dataUser = randomUser.results[0]

    setUser({
      ...user,
      name: `${dataUser.name.first} ${dataUser.name.last}`,
      age: dataUser.dob.age,
      address: `${dataUser.location.street.number} ${dataUser.location.street.name}, ${dataUser.location.city}, ${dataUser.location.state}, ${dataUser.location.country}`,
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = () => {
    return console.log('onclick')
     
  }
  return (
    <>
      <Container>
        <Card style={{ margin: '50px 0' }}>
          <div
            className='col-sm-10 mt-lg-10'
            style={{ backgroundColor: 'pearl' }}
          >
            <label style={{ paddingLeft: '20px' }}>Name: </label>
            <input
              type='text'
              name='name'
              placeholder={user.name}
              onChange={handleChange}
              style={{ paddingLeft: '10px' }}
            ></input>
            <div style={{ paddingLeft: '20px' }}>Age: {user.age}</div>
            <div style={{ paddingLeft: '20px' }}>Address: {user.address}</div>
          </div>
        </Card>
        <Button variant='success' onClick={handleClick}>
          Update
        </Button>
      </Container>
    </>
  )
}

export default App
