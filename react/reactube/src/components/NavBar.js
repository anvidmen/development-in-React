import React, { useState } from 'react'
import { Avatar, TextField, Toolbar } from '@material-ui/core'
import avatar from '../images/avatar.jpg'
import reactube from '../images/reactube.png'
import useStyles from './styles'

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const classes = useStyles()

  const handleChange = (event) => setSearchTerm(event.target.value)

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit(searchTerm)
    }
  }

  return (
    <header className={classes.header} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <img src={reactube} alt='icon' />
      </div>
      <div className={classes.searchBar}>
        <TextField
          className={classes.input}
          fullWidth
          label='Search...'
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <Toolbar className={classes.toolbar}>
        <Avatar className={classes.avatar} src={avatar} alt='icon' />
      </Toolbar>
    </header>
  )
}

export default SearchBar
