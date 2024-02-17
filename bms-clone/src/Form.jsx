import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  } from '@chakra-ui/react'
import Seatmap from './Seatmap';
import barcode from './barcode.gif'

const Form = () => {

    let arr = []

    let lsData = localStorage.getItem("lsdata")

    arr.push(lsData)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [username, setUsername] = useState("")
    const [tickets, setTickets] = useState("")
    const [flag, setFlag] = useState(true)
    // const [bookedTickets, setBookedTickts] = useState([lsData])

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

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Booking Confirmed !</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img style={{margin:'auto', marginBottom:'20px'}} src={barcode} />
          <Heading style={{marginBottom:'10px', textTransform:'uppercase'}} as='h4' size='md'>Name: {username}</Heading>
          <Heading style={{ textTransform:'uppercase'}} size='md'>Seats ({tickets} Tickets): {arr.map((item)=> {
            return <Heading style={{marginTop:'10px'}} color={'green'}>{item}</Heading>
          })}</Heading>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    <Seatmap tickets={tickets}/>
    
    <div style={{width:'50%', margin:'auto',marginTop:'8px'}}>

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

  <Button isDisabled={flag} colorScheme='red' onClick={onOpen}>BOOK</Button>
</FormControl>

    </div>
    </>
  )
}

export default Form