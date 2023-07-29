import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"//for easy page navigation: step-1
import { addUser } from "../service/api";

//styling- variable name must start capital
const Conatiner = styled(FormGroup)`
  width: 50%;
  margin: 5% auto auto auto;
`;
const Container2 = styled(FormControl)`
  margin-top: 20px;
`;


const AddUser = () => {

  //using object with react hooks
  const defaultObject={name:'',username:'',email:'',phone:''};
  const navigate= useNavigate();//for easy navigation:step-2
  const [user,setUser]=useState(defaultObject);
  const onValueChange=(e)=>{
      setUser({...user,[e.target.name]: e.target.value})
      // console.log(user)
  }

  const addUserDetails=async()=>{
    await addUser(user);
    navigate("/alluser")//for easy navigation: step-3
  }
  return (
    <div>
      <Conatiner>
        <Typography variant="h4">Add User</Typography>
        <Container2>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name"/>
        </Container2>
        <Container2>
          <InputLabel>User Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </Container2>
        <Container2>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email"/>
        </Container2>
        <Container2>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone"/>
        </Container2>
        <Container2>
          <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
        </Container2>
      </Conatiner>
    </div>
  );
};

export default AddUser;

//basic format
{/* <FormGroup>

<FormControl>
  <InputLabel>Anything</InputLabel>
  <Input/>
</FormControl>

</FormGroup> */}
