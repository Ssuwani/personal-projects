import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import TextInput from "./components/TextInput.js"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import tileData from './tileData';
import { Button } from '@material-ui/core';
import EdiText from 'react-editext'
import axios from 'axios'

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
    backgroundColor: '#f0f0f0'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    height: 300,
  },
  image: {
    width: 64,
    height: 64,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [classOne, setClassOne] = useState("Dog");
  const [classTwo, setClassTwo] = useState("Cat");
  const [userId, setUserId] = useState('');
  const [resultImageUrl, setResultImageUrl] = useState('')
  const classes = useStyles();
  useEffect(() => {
    setUserId(guidGenerator())
  }, []);
  const onTrainButtonClicked = async () => {
    console.log(`Train Button Cliked classes : ${classOne} ${classTwo}`)
    const response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/training',
      data: {
        classes: [classOne, classTwo],
        userId: userId
      }
    });
    console.log(response)
    console.log(response.status)
    if (response.status == 200) {
      setResultImageUrl(`http://localhost:5000/result/${userId}`)
    }
  }
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>

          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={5}>
              <Typography variant="h5">Input classes</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography>
                    <EdiText
                      // showButtonsOnHover
                      // editButtonContent="Edit"
                      type='text'
                      value={classOne}
                      onSave={(text) => setClassOne(text)}
                    />
                  </Typography>
                  <Typography>
                    <EdiText
                      // showButtonsOnHover
                      // editButtonContent="Edit"
                      type='text'
                      value={classTwo}
                      onSave={(text) => setClassTwo(text)}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={5}>
              <Typography variant="h5">Training</Typography>

              <Typography>
                <Button variant="outlined" onClick={() => onTrainButtonClicked()}>Training</Button>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={5}>
              <Typography variant="h5">Demo & Download</Typography>
              {/* <img src="http://localhost:5000/result/f06a1839-2c50-e395-1645-0a45da4e9008" width={250} /> */}
              <img src={resultImageUrl} width={250} />
            </Paper>

          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Paper className={classes.control}>
          <Typography>hi</Typography>
        </Paper>
      </Grid> */}
    </Grid>
  );
}
