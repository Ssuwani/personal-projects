import logo from './logo.svg';
import './App.css';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const serverPath = 'http://localhost:5000/'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);
  const [result, setResult] = React.useState();
  const [searchText, setSearchText] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose_ok = () => {
    setOpen(false);
    setResult(true);
    handleClickOpen();
  };

  const buttonClick = async () => {
    // var response = await axios.post(serverPath + 'review/',{
    //   star: value,
    //   review: searchText
    // });
    // console.log(value, searchText)
    // console.log(response.data);
    // setResult(response.data);
    // console.log(value, searchText)
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    axios.post("http://127.0.0.1:5000/review",
      { star: value, review: searchText }, config
    )
      .then(function (response) {
        console.log(response.data);
        setResult(response.data)
        handleClickOpen();

      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const result_div = () => {
    console.log(result)
    // if (result){
    //   return (<div><h1>?????? : Good</h1></div>)
    // }
    // else{
    //   return (<div><h1>?????? : BAD</h1></div>)
    // }
    if (result) {
      return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"????????? ?????????????????? ???????????????."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ???????????? ??????: {searchText} {<br />}??????: {value}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ??????
          </Button>
          </DialogActions>
        </Dialog>
      )
    } else {
      return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"????????? ?????? ????????? ?????????????"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ???????????? ??????: {searchText} {<br />}??????: {value}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              ????????????
          </Button>
            <Button onClick={handleClose_ok} color="primary" autoFocus>
              ?????????
          </Button>
          </DialogActions>
        </Dialog>
      )
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>?????? ?????? ?????? ??????</h2>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">??????</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">??????</Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                // label="?????????"
                variant="filled"
                color='secondary'
                // onKeyPress={appKeyPress}
                value={searchText}
                onChange={({ target: { value } }) => setSearchText(value)}

              />
            </form>
          </Box>
          <Button variant="contained" color='default' onClick={buttonClick}>
            ????????????
          </Button>
          {result_div()}
        </div>
      </header>
    </div >
  );
}

export default App;
