import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { FieldsData } from './components/FieldsData';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [Data,setData] = useState([]);
  const addData = () =>{
      setData([...Data,{name,email}]);
      setName("");
      setEmail("");
  }
  
  return (
    <div className="App">
      <header>
        <div className="mui-container mui--text-center">
            <Header />
        </div>
      </header>
      <div id="content-wrapper" className="mui--text-center">
      <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" label="name" value={name} onChange={(event)=> setName(event.target.value)} variant="outlined" />
          <TextField id="outlined-basic" label="email" value={email} onChange={(event)=> setEmail(event.target.value)} variant="outlined" />
          <Button variant="contained" color="error" onClick={addData}> <AddIcon /></Button>
      </Stack>
      </div>
      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Action</h4>
        </div>
      {
        Data.map((ele,index)=> {
          return (<FieldsData data={Data} key={index} name={ele.name} email={ele.email} index={index} setData={setData}/>)
        })
      }
      </div>
      <footer>
        <div className="mui-container mui--text-center">
        <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
