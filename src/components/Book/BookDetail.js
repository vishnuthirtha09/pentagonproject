import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked,setChecked] = useState(false);
const history = useNavigate 
    useEffect(() => { 
        const fetchHandler = async() => {
            await axios
            .get('http://localhost:5000/books/${id}',)
            .then((res) => res.data).then(data=>setInputs(data.book));
        };
         fetchHandler()
 },   [id]);
    const sendRequest = async() => {
        await axios.put('http://localhost:500/books/${id}', {
            name: String(inputs.name),
            author: String(inputs.author),
            discription: String(inputs.discription),
            price: Number(inputs.price),
            image: String(inputs.image),
            available:Boolean(checked),
        }).then(res=>res.data)
    }

      const handleSubmit = (e) =>{
         e.preventDefault();
         sendRequest().then(()=>history("/books"))
      }
      const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
          [e.target.name]: e.target.value
          }))
      };

  return (
    <div>    
       { inputs && (
        <form onSubmit={handleSubmit} >
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
        <FormLabel>Name</FormLabel><br/>
        <TextField 
        value={inputs.name}
         onChange={handleChange} 
         margin="5"
          fullwidth
           varient="outlined"
            name="name"
         /><br/>
        <FormLabel>Author</FormLabel><br/>
        <TextField  value={inputs.author}
         onChange={handleChange} 
         margin="5" 
         fullwidth 
         varient="outlined"
          name="author" 
           /><br/>
        <FormLabel>Discription</FormLabel><br/>
        <TextField 
         value={inputs.discription}
         onChange={handleChange}
          margin="5"
            varient="outlined"
             name="discription"
         /><br/>
        <FormLabel>Price</FormLabel><br/>
        <TextField
              value={inputs.price}
              onChange={handleChange} 
              type="number"
              margin="5"
              fullwidth 
              varient="outlined"
              name="price" 
        /><br/>
        <FormLabel>Image</FormLabel><br/>
        <TextField
        value={inputs.image}
        onChange={handleChange} 
        fullwidth 
        varient="outlined" 
        name="image"
         /><br/>
        <FormControlLabel
        control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} 
        label="Available"
         /><br/>

        <Button marginTop={3} varient="contained" type="submit">
            Update Book
        </Button>
        </Box>
    </form>  )}
    </div>
  )
}

export default BookDetail