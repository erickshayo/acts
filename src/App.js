import routes from './routes/routes';
import { ThemeProvider , createTheme } from '@mui/material/styles';
// routes
import Routeer from './routes/routes';
import  {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

const theme = createTheme({
  palette:{
    // primary:{
    //   main:"#FFFFFF"
    // }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routeer />
   </BrowserRouter>
</ThemeProvider>
    </div>
  );
}

export default App;
