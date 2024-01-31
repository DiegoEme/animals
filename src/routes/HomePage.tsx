import { useState } from 'react'
import '../App.css'
import AnimalInput from '../components/AnimalInput'
import AnimalList from '../components/AnimalList'

function App() {
  const [animal, setAnimal] = useState("")

  return (
    <>
      <AnimalInput onAnimalChange={setAnimal} />
      <AnimalList animal={animal} />
    </>
  )
}

export default App
