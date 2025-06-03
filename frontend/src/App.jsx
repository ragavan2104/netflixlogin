import './App.css'
import Form from './component/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Fail from './component/Fail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
