import { useState } from 'react'
import '../App.css'
import AnimalInput from '../components/AnimalInput'
import AnimalList from '../components/AnimalList'
import { useAnimals } from '../hooks/useAnimals'

function App() {
  const [animal, setAnimal] = useState("")
  const {animals, loading} = useAnimals(animal)

  if(loading){
    return "loading..."
  }

  return (
    <>
      <AnimalInput onAnimalChange={setAnimal} />
      <AnimalList animals={animals} />
    </>
  )
}

export default App
