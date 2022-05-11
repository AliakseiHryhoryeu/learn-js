import { TextField } from '@mui/material'
import React from 'react'


const Search = (props) => {
    const { onChange, value } = props

    return (
        
        <TextField 
        variant='standard' 
        type='search'
        label='search'
        fullWidth
         value={value} 
         onChange={onChange} 
         sx={{mb:'1.5rem'}}
        />
    )
}

export default Search