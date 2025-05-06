import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Welcome() {
    const [username,setName] = useState('');

    function handleChange(e){
        setName(e.target.value);
    }
    function handleBlur(){
        alert(`Xoş gəldin, ${username}!`);
    }

  return (
    <div>
         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"
       onBlur={handleBlur}
       onChange={(e)=>handleChange(e)}
       value={username}
       label="Name"
       variant="outlined" />
      </Box>
    </div>
  )
}

export default Welcome