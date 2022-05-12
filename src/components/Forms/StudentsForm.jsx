import { 
  Button, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormLabel, 
  InputLabel, 
  MenuItem, 
  Radio, 
  RadioGroup, 
  Select, 
  TextField 
} from "@mui/material";
import { 
  Link 
} from "react-router-dom";





export default function StudentsForm() {
  return (
        <div className="container">
      <form action="">
        <FormGroup>

          {/* Fullname */}
          <TextField
            label="Full name"
            name="name"
            id="standard-size-small"
            size="small"
            required
            variant="standard"
            helperText="Please enter your name"
          />
          

          {/* Date of Birth */}
          <TextField
            id="date"
            label="Date of Birth"
            type="date"
            name="dob"
            helperText="Please enter your date of birth"
            required
          />
          

          {/* Gender */}
          <FormControl sx={{ mt: 3, mb: 3 }} >
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="gender"
              required
            >
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          {/* Phone Number */}
          <TextField
            sx={{ mb: 3 }}
            label="Phone Number"
            id="standard-size-small"
            size="small"
            variant="standard"
            name="phone"
            required
            helperText="Please enter your phone number"
          />


          {/* Email */}
          <TextField
            sx={{ mb: 3 }}
            label="Email"
            id="standard-size-small"
            size="small"
            variant="standard"
            name="email"
            required
            helperText="Please enter your email"
          />
          

          {/* Address */}
          <TextField
            sx={{ mb: 3 }}
            label="Address"
            id="standard-size-small"
            size="small"
            variant="standard"
            name="address"
            required
            helperText="Please enter your address"
          />


          <FormControl variant="filled" sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-filled-label">Classroom</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>ReactJS</MenuItem>
              <MenuItem value={20}>PHP</MenuItem>
              <MenuItem value={30}>Flutter</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">Save</Button>

          <Link to={-1}>
            <Button type="button" variant="outlined" sx={{ mt: 2 }} style={{ width: '100%' }}>Cancel</Button>
          </Link>



        </FormGroup>


      </form>
    </div>
  )
}