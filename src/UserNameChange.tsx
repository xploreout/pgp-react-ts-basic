import React from 'react'

interface IUserNameProp {
  name: string
  onNameChange(e: React.ChangeEvent<HTMLInputElement>): void
}
const UserNameChange = ({ name, onNameChange }: IUserNameProp) => {
  return (
    <>
      <p style={{ marginTop: '20px' }}>Update "{name}" here:</p>
      <input type='text' value={name} onChange={onNameChange} />
    </>
  )
}

export default UserNameChange
