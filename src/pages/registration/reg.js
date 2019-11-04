import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import $ from "jquery";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

//Components

//Mui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        DonutFactory Corp.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  top: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paper: {},
  flexitem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    padding: "5px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  phoneNumber: "",
  email: "",
  password: "",
  repeatPassword: "",
  address1: "",
  address2: "",
  state: "",
  city: "",
  zipCode: "",
  gender: "female",
  marital: "single"
};

const initialErrors = {
  firstName: "",
  lastName: "",
  userName: "",
  phoneNumber: "",
  email: "",
  password: "",
  repeatPassword: "",
  address1: "",
  state: "",
  city: "",
  zipCode: ""
};

export default function Registration() {
  //states
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    repeatPassword: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: "",
    gender: "female",
    marital: "single"
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    repeatPassword: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: ""
  });

  const classes = useStyles();

  function submitHandler(e) {
    e.preventDefault();
    console.log(values);

    $.ajax({
      data: values,
      type: "POST",
      url: "http://localhost:1337/",
      success: function(data) {
        console.log(JSON.parse(data));
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  }

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleChange(e) {
    e.persist();

    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
      numFix: ""
    }));
  }

  function resetHandler() {
    setErrors(initialErrors);
    setValues(initialValues);
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.top}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </div>
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <div className={classes.flexitem} style={{ float: "left" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="userName"
                  onChange={handleChange}
                  value={values.userName}
                  helperText={errors.userName}
                  error={errors.userName ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={values.firstName}
                  helperText={errors.firstName}
                  error={errors.firstName ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange}
                  value={values.lastName}
                  helperText={errors.lastName}
                  error={errors.lastName ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  onChange={handleChange}
                  value={values.phoneNumber}
                  helperText={errors.phoneNumber}
                  error={errors.phoneNumber ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={values.email}
                  helperText={errors.email}
                  error={errors.email ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={values.password}
                  helperText={errors.password}
                  error={errors.password ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="repeatPassword"
                  label="Repeat Password"
                  type="password"
                  id="repeatPassword"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={values.repeatPassword}
                  helperText={errors.repeatPassword}
                  error={errors.repeatPassword ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address1"
                  label="Address 1"
                  name="address1"
                  autoComplete="address1"
                  onChange={handleChange}
                  value={values.address1}
                  helperText={errors.address1}
                  error={errors.address1 ? true : false}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.flexitem}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address2"
                  label="Address 2"
                  name="address2"
                  autoComplete="address2"
                  onChange={handleChange}
                  value={values.address2}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  onChange={handleChange}
                  value={values.city}
                  helperText={errors.city}
                  error={errors.city ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  error={errors.state ? true : false}
                >
                  <InputLabel htmlFor="state-error">State</InputLabel>
                  <Select
                    value={values.state}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    displayEmpty
                    inputProps={{
                      name: "state",
                      id: "outlined-state"
                    }}
                  >
                    <MenuItem value="" disabled>
                      <em style={{ marginRight: "40px" }}>Select your state</em>
                    </MenuItem>
                    <MenuItem value="AL">Alabama</MenuItem>
                    <MenuItem value="AK">Alaska</MenuItem>
                    <MenuItem value="AZ">Arizona</MenuItem>
                    <MenuItem value="AR">Arkansas</MenuItem>
                    <FormHelperText>{errors.state}</FormHelperText>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="zipCode"
                  label="Zip Code"
                  name="zipCode"
                  autoComplete="zipCode"
                  onChange={handleChange}
                  value={values.zipCode}
                  helperText={errors.zipCode}
                  error={errors.zipCode ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                    <FormControlLabel
                      value="decline to state"
                      control={<Radio />}
                      label="Decline to State"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Marital Status</FormLabel>
                  <RadioGroup
                    aria-label="marital"
                    name="marital"
                    value={values.marital}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="single"
                      control={<Radio />}
                      label="Single"
                    />
                    <FormControlLabel
                      value="married"
                      control={<Radio />}
                      label="Married"
                    />
                    <FormControlLabel
                      value="divorced"
                      control={<Radio />}
                      label="Divorced"
                    />
                    <FormControlLabel
                      value="widowed"
                      control={<Radio />}
                      label="Widowed"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={resetHandler}
          >
            Reset
          </Button>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
