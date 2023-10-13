
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Coffee'
import { useState } from 'react'

function App() {

  const lodedCoffees = useLoaderData()

  const [coffees , setCoffees] = useState(lodedCoffees)

  return (
    <>
      
      <h1 className='text-6xl text-purple-600'>Hot Cold coffee{coffees.length}</h1>
      <div className='grid grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <Coffee key={coffee._id} coffee ={coffee} setCoffees ={setCoffees} coffees={coffees} ></Coffee>)
        }
      </div>
     
    </>
  )
}

export default App
