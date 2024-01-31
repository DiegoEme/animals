import { useState } from 'react'
import AnimalInput from '../components/AnimalInput'
import AnimalList from '../components/AnimalList'
import { useAnimals } from '../hooks/useAnimals'

function App() {
  const [animal, setAnimal] = useState("")
  const {animals, loading} = useAnimals(animal)

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      {loading ? "Loading..." : 
      <>
        <AnimalInput onAnimalChange={setAnimal} />
        <AnimalList animals={animals} />
      </>}
    </div>
    
  )
}

export default App
