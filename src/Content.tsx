import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

interface IProps {
  name: string
  age?: number
  address?: string
}

const Content = ({ name, age, address }: IProps) => {
  return (
      <div className='col-sm-10 mt-lg-10' style={{ backgroundColor: 'pearl' }}>
        <div style={{ paddingLeft: '20px' }}>Name: {name}</div>
        <div style={{ paddingLeft: '20px' }}>Age: {age}</div>
        <div style={{ paddingLeft: '20px' }}>Address: {address}</div>
      </div>
  )
}
export default Content
