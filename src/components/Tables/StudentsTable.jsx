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



export default function StudentsTable() {
  return (
    <TableContainer className="container">
      <Link to="/students/add">
        <Button variant="contained" endIcon={<AddIcon />}>
          Add
        </Button>
      </Link>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell style={{fontWeight: '900'}}>Name</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">DOB</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Gender</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Phone Number</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Email</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Address</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Classroom</TableCell>
            <TableCell style={{fontWeight: '900'}} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Duong Thanh Luong</TableCell>
            <TableCell align="center">23-11-1999</TableCell>
            <TableCell align="center">Male</TableCell>
            <TableCell align="center">0888931199</TableCell>
            <TableCell align="center">duongthanhluong2311@gmail.com</TableCell>
            <TableCell align="center">Nhân Chính, Thanh Xuân, Hà Nội</TableCell>
            <TableCell align="center">ReactJS</TableCell>
            <TableCell align="center" style={{display: 'flex'}}>
              <Link to="/students/edit/:id">
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