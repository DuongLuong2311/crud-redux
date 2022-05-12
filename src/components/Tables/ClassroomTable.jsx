import { 
  Button,
  IconButton, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';




export default function ClassroomTable() {
  return (
    <TableContainer className="container">
      <Link to="/classrooms/add">
        <Button variant="contained" endIcon={<AddIcon />}>
          Add
        </Button>
      </Link>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell style={{fontWeight: '900'}}>Classname</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Description</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">ReactJS</TableCell>
            <TableCell align="center">Nice class, great one</TableCell>
            <TableCell align="center" style={{display: 'flex', justifyContent: 'center'}}>
              <Link to="/classrooms/edit/:id">
                <IconButton aria-label="delete" color="primary" size="large">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Link>
              <IconButton aria-label="delete" color="error" size="large">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}