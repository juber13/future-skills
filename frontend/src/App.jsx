import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content';
// import { Form } from 'react-router-dom';
import CreateCard from './pages/CreateCard';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import CardDetails from './components/CardDetails';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/addCards' element={<CreateCard />} />
        <Route path='/card/:title' element={<CardDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
