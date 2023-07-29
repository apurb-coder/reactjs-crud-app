import { AppBar, Toolbar, styled } from '@mui/material'
import React from 'react'

import { NavLink } from "react-router-dom"; // must import

const Header = styled(AppBar)`
background: #111111;
`;

// for html tag we use single quote:  const Tabs= styled('p')
const Tabs= styled(NavLink)`
font-size:20px;
margin-right:20px;
color:#fff;
text-decoration:none;
`

const Navbar = () => {
  return (
    <div>
      <Header position='static'>
        <Toolbar>
          <Tabs to='/'>CURD APP</Tabs> 
          <Tabs to='/alluser'>All User</Tabs> {/*onClick url me alluser a jayega*/}
          <Tabs to='/adduser'>Add User</Tabs> {/*onClick url me adduser a jayega*/}
        </Toolbar>
      </Header>
    </div>
  )
}

export default Navbar