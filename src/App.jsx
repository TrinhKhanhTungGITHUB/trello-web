import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import AccessAlarm from '@mui/icons-material/AccessAlarm'
import Home from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import pink from '@mui/material/colors/pink'


function App() {
  return (
    <>
      <div>Tùng HAHA</div>
      <Button variant='contained'>Hello world</Button>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <br />
      <AccessAlarm />
      <ThreeDRotation />
      {/* <YouTube/> */}
      <Home />
      <Home color='primary' />
      <Home color='secondary' />
      <Home color='success' />
      <Home color='action' />
      <Home color='disabled' />
      <Home sx={{ color: pink[500] }} />
    </>
  )
}

export default App
