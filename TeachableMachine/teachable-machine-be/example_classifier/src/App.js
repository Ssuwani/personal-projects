import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{ paddingTop: 100 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ssuwani">
        Ssuwani
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [pictureURL, setPictureURL] = useState();
  const [picture, setPicture] = useState();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const onChange = e => {

    // image update
    setPictureURL(URL.createObjectURL(e.target.files[0]))
    setPicture(e.target.files[0])
  }
  const onClick = async () => {

    // image update
    setLoading(true);
    const formData = new FormData();
    formData.append('file', picture);

    // call api
    const res = await axios.post("http://localhost:5000/predict", formData);
    console.log(res.data)
    setResult(res.data.class_name)
    setLoading(false);
  }

  return (
    <Container maxWidth="sm" align="center">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Demo Page
        </Typography>
        <br />
        <Typography>
          Input your test image file
        </Typography>
        <br />
        <Button
          style={{ padding: 50 }}
          variant="contained"
          component="label"
        >
          Upload File
        <input
            accept="image/*"
            type="file"
            hidden
            onChange={e => onChange(e)}
          />
        </Button>
        <br />
        <br />
        <br />
        {picture && <img width={300} src={pictureURL} />}
        <br />
        {picture && <Button onClick={onClick} variant="outlined">분석하기</Button>}
        {
          loading ? (
            <>
              <br />
              <CircularProgress />
            </>
          ) :
            result ?
              <Typography>결과 : {result}</Typography>
              :
              <div></div>
        }
        <br />
        <br />
        <Copyright />
      </Box>
    </Container>
  );
}
