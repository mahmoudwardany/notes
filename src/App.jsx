import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter, Route, Routes } from 'react-router-dom';
    import './index.css';
    import Create from './pages/Create';
    import Notes from './pages/Notes';
import DetailsCard from './pages/DetailsCard';
    
    function App() {
      return (
        <div className='app'>
          <ToastContainer/>
        <BrowserRouter>
        <Routes>
          <Route path='/notes'element={<Notes/>}/>
          <Route path='/notes/:id'element={<DetailsCard/>}/>
          <Route path='/create'element={<Create/>}/>
        </Routes> 
        </BrowserRouter>
        </div>
      );
    }
    

export default App;
