//Libraries
import { useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';



//SCSS
import './sass/main.scss';


//Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";



//View
import Home from './views/Home';
import Classroom from './views/Classroom';
import Students from './views/Students';
import Users from './views/Users';
import UsersForm from './components/Forms/UsersForm';
import StudentsForm from './components/Forms/StudentsForm';
import ClassroomForm from './components/Forms/ClassroomForm';

//Components










export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Navbar
            toggleDrawer={toggleDrawer}
          />
          <Sidebar
            isOpen={isOpen}
            toggleDrawer={toggleDrawer}
          />

          <Routes>
            <Route path="/" element={ < Home />} />
            <Route path="/users" element={ < Users />} />
            <Route path="/students" element={ < Students />} />
            <Route path="/classrooms" element={ < Classroom />} />
            <Route path="/users/add" element={ < UsersForm />} />
            <Route path="/students/add" element={ < StudentsForm />} />
            <Route path="/classrooms/add" element={ < ClassroomForm />} />
            <Route path="/users/edit/:id" element={ < UsersForm />} />
            <Route path="/students/edit/:id" element={ < StudentsForm />} />
            <Route path="/classrooms/edit/:id" element={ < ClassroomForm />} />

          </Routes>
        </>
      </BrowserRouter>
      
    </div>
  );
}