import { Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import AddEditBlog from './pages/AddEditBlog';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Blog" element={<Blog/>}></Route>
      <Route path="/AddEditBlog" element={<AddEditBlog/>}></Route>
      <Route path="/NotFound" element={<NotFound/>}></Route>
    </Routes>
    <Footer></Footer>        
    </>
  )
}

export default App
