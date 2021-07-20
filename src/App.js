import MainLayout from './components/layout'
import LoginComponent from "./components/views/Login";
import { loggedIn } from './functions/login';

function App() {
  console.log("Aut ? ", loggedIn())
  return (
    loggedIn() ? <MainLayout /> : <LoginComponent />    
  );
  
}

export default App;
