import logo from './logo.svg';
import './App.css';
import Seatmap from './Seatmap';
import Form from './Form';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
         <div style={{border:'1px solid white', marginTop:'10px', paddingBottom:'20px'}}>
        <ChakraProvider>
          <Form />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
