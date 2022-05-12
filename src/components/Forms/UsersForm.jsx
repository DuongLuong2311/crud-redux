import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import { useState } from "react";
import {
  Link
} from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





export default function UsersForm() {


  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };




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


          <FormControl sx={{mt: 2 , mb: 2,  width: '100' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
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





