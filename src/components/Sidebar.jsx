// import { useState } from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'



export default function Sidebar({toggleDrawer, isOpen}) {
  

  return (
    <div className="sidebar">
      <>
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
        >
          <ul className="sidebar-content">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/users">
              <li>Users</li>
            </Link>

            <Link to="/students">
              <li>Students</li>
            </Link>

            <Link to="/classrooms">
              <li>Classroom</li>
            </Link>
          </ul>
        </Drawer>
      </>
    </div>
  )
}