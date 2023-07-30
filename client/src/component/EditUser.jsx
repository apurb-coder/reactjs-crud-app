import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import { getUser , editUser} from "../service/api";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom" //url se kuch extract karne ke liye

const URL=process.env.REACT_APP_URL
//styling- variable name must start capital
const Conatiner = styled(FormGroup)`
  width: 50%;
  margin: 5% auto auto auto;
`;
const Container2 = styled(FormControl)`
  margin-top: 20px;
`;


const defaultObject = { name: "", username: "", email: "", phone: "" };

const EditUser = () => {
  const [user, setUser] = useState(defaultObject);
  const {id} = useParams(); //   "/edituser/:id"   here ':id' field wala part id variable me store hoga
  useEffect(() => {
    loadUserDetails(id);
  }, []); //run only one time , when the editUser component loads
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const loadUserDetails=async(id)=>{
    const response = await getUser(id);
    setUser(response.data[0])
  }
  const navigate=useNavigate();//for navigation
  //when edit user button is clicked call this function
  const editUserDetails=async()=>{
    await editUser(id,user);
    navigate(`/alluser`)
  }

  return (
    <div>
      <Conatiner>
        <Typography variant="h4">Edit User</Typography>
        <Container2>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name"  value={user.name}/>
        </Container2>
        <Container2>
          <InputLabel>User Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
        </Container2>
        <Container2>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
        </Container2>
        <Container2>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
        </Container2>
        <Container2>
          <Button variant="contained" onClick={()=>editUserDetails()}>
            Edit User
          </Button>
        </Container2>
      </Conatiner>
    </div>
  );
};

export default EditUser;

//basic format
{
  /* <FormGroup>

<FormControl>
  <InputLabel>Anything</InputLabel>
  <Input/>
</FormControl>

</FormGroup> */
}
