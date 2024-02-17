import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button
  } from '@chakra-ui/react'
import Seatmap from './Seatmap';

const Form = () => {

    // console.log(data);

    const [username, setUsername] = useState("")
    const [tickets, setTickets] = useState("")
    const [flag, setFlag] = useState(true)

    function handleChange(e){
        if(e.target.name=='username'){
            setUsername(e.target.value)
        }
        else{
            setTickets(e.target.value)
        }
    }

    useEffect(()=> {
        if(username && tickets){
            setFlag(false)
        }
        else{
            setFlag(true)
        }
    }, [username, tickets])
    
  return (
    <>
    <Seatmap tickets={tickets}/>
    
    <div style={{width:'50%', margin:'auto',marginTop:'20px'}}>

        <FormControl style={{display:'flex', justifyContent:'space-around', alignItems:'center'}} isRequired>
  <div>
  <Input color={'white'} name='username' onChange={handleChange}  placeholder='First name' /></div>

 <div>
  <Select  color='white'
 name='tickets' onChange={handleChange}>
    <option value="">Select number of tickets</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </Select></div>

  <Button isDisabled={flag} colorScheme='red'>BOOK</Button>
</FormControl>

    </div>
    </>
  )
}

export default Form