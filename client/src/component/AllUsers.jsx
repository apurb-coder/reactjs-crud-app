import {React, useEffect,useState} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow,styled, Button} from '@mui/material/'
import { getUsers, deleteUser } from '../service/api.js'
import { useNavigate } from 'react-router-dom';// for easy navigation , step-1

//styling table- variable name must start capital
const StyTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;


const Trow= styled(TableRow)`
  background-color:#000000;
  & > th {
    color: #fff;
    font-size:20px;
  }
`
//variable name must start capital
const Tbody=styled(TableRow)`
  & > td {
    font-size:20px;
  }
`

const AllUsers = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    getAllUsers()
  },[])// [] means on initial mount , only one time will run
  const getAllUsers=async()=>{
    let response= await getUsers();
    // console.log(response.data)
    setUsers(response.data)
  }
  const navigate=useNavigate();//for easy navigation , step-2
  //on clicking edit button open edit page
  const openEditPage=(id)=>{
    navigate(`/edituser/${id}`) //for easy navigation , step-3
  }
  //on clicking delete button run this function
  const deleteUserDetails=async(id)=>{
    await deleteUser(id);
    getAllUsers()
  }
  return (
    <StyTable>
      <TableHead>
        <Trow>
          <TableCell>NAME</TableCell>
          <TableCell>USER NAME</TableCell>
          <TableCell>EMAIL ID</TableCell>
          <TableCell>PHONE NO.</TableCell>
          <TableCell> </TableCell>
        </Trow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <Tbody key={user._id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" color="secondary" style={{marginRight:10}} onClick={()=>openEditPage(user._id)}>
                Edit
              </Button>
              <Button variant="contained" onClick={()=>{deleteUserDetails(user._id)}}>Delete</Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyTable>
  );
}

export default AllUsers