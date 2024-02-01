
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
