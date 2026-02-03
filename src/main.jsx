import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List.jsx' 
import { Add, sub, prod, div } from './Calc.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <List />
    <List />
    <ol>
      <li>Addition is: {Add(10,20)}</li>
      <li>Subtraction is: {sub(10,20)}</li>
      <li>Multiplication is: {prod(10,20)}</li>
      <li>Division is: {div(10,20)}</li> 
    </ol>
  </StrictMode>
)
