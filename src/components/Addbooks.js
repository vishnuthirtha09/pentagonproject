import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useState } from 'react'

const AddBook = () => {
  
       const [ name,setName] = useState("")
       const [author,setAuthor] = useState("")
       const [discription,setDiscription] = useState("");
       const [price,setPrice] = useState("");
       const [image,setImage] = useState("");
  
       const push = () => {
        axios.post('http://localhost:5000/register', { name, author, discription, price, image})
          .then((response) => {
            const result = response.data;
            if (result) {
              alert("Data saved successfully");
             setName('')
             setAuthor('')
             setDiscription('')
             setPrice('')
             setImage('')
            }
          })
          .catch((error) => {
            console.error("POST request error:", error);
            alert("Something went wrong when saving data.");
          });
      }
  return (
    <div style={{ backgroundColor: '#B5CCC9', minHeight: '100vh', padding: '20px' }}>
    <form  >
        <Box 
        display="flex"
        flexDirection="column" 
        justifyContent={'center'}
        maxWidth={700}
        alignContent={"center"}
        alignSelf='center'
        marginLeft={"auto"}
        marginRight='auto'
        marginTop={5}
        >
        <FormLabel><b>Name</b></FormLabel><br/>
        <TextField 
        value={name}
         onChange={(e)=>setName(e.target.value)} 
         margin="5"
          fullwidth
           varient="outlined"
            name="name"
         /><br/>
        <FormLabel><b>Author</b></FormLabel><br/>
        <TextField 
         value={author}
         onChange={(e)=>setAuthor(e.target.value)} 
         margin="5" 
         fullwidth 
         varient="outlined"
          name="author" 
           /><br/>
        <FormLabel><b>Discription</b></FormLabel><br/>
        <TextField 
         value={discription}
         onChange={(e)=>setDiscription(e.target.value)}
          margin="5"
            varient="outlined"
             name="discription"
         /><br/>
        <FormLabel><b>Price</b></FormLabel><br/>
        <TextField
              value={price}
              onChange={(e)=>setPrice(e.target.value)} 
              type="number"
              margin="5"
              fullwidth 
              varient="outlined"
              name="price" 
        /><br/>
        <FormLabel><b>Image</b></FormLabel><br/>
        <TextField
        value={image}
        onChange={(e)=>setImage(e.target.value)} 
        fullwidth 
        varient="outlined" 
        name="image"
         /><br/>
        </Box>
    </form>
    <center>
     <Button 
     style={{background: 'green', color: 'yellow'}}
     type="submit" onClick={push}>
     Add Book
     </Button>
     </center>
     </div>
  )
}

export default AddBook