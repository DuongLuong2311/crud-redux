import { 
  Button, 
  FormGroup,
  TextField 
} from "@mui/material";
import { 
  Link 
} from "react-router-dom";


export default function ClassroomForm() {
  return (
    <div className="container">
      <form action="">
        <FormGroup>

          {/* Fullname */}
          <TextField
            label="Classroom"
            name="classroom"
            id="standard-size-small"
            size="small"
            required
            variant="standard"
            helperText="Please enter your classroom name"
          />
           
          <TextField
            label="Description"
            name="description"
            id="standard-size-small"
            size="small"
            required
            variant="standard"
            helperText="Please enter your description"
          />


          <Button type="submit" variant="contained">Save</Button>

          <Link to={-1}>
            <Button type="button" variant="outlined" sx={{ mt: 2 }} style={{ width: '100%' }}>Cancel</Button>
          </Link>



        </FormGroup>


      </form>
    </div>
  )
}