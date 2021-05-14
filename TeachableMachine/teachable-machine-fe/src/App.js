import React from 'react';
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

// import StarBorder from '@material-ui/icons/StarBorder'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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

  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography>Dog</Typography>
                </Grid>
                <GridList className={classes.gridList} cols={2.5}>
                  {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} />
                      <GridListTileBar
                        // title={tile.title}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                        actionIcon={
                          <IconButton>
                            <StarIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Cat</Typography>
                </Grid>
                <GridList className={classes.gridList} cols={2.5}>
                  {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} />
                      <GridListTileBar
                        // title={tile.title}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                        actionIcon={
                          <IconButton>
                            <StarIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Typography>Training</Typography>
          </Grid>
          <Grid item>
            <Typography>Demo & Download</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Typography>hi</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
