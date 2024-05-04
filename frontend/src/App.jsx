
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Price from "./Pages/Price";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path='Price' element={<Price/>}/>
      </Routes>
    </Router>
  )
}

export default App;
