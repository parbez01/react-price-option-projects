
import { LineChart } from 'recharts'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOption from './components/PriceOptions/PriceOptions'
import Phones from './components/Phones/Phones'



function App() {


  return (
    <>
      <NavBar></NavBar>
      <PriceOption></PriceOption>
     <LineChart></LineChart>
     <Phones></Phones>

    </>
  )
}

export default App
