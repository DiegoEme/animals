import { useAnimals } from "../hooks/useAnimals"
import AnimalCard from "./AnimalCard"

interface IAnimalList {
  animal: string
}

export default function AnimalList({animal}: IAnimalList){
  const {animals, loading, error} = useAnimals(animal)

  if(loading){
    return "loading..."
  }

  if(error){
    return `Error: ${error}`
  }

  return (
    <div>
      {animals.length > 0 ? animals.map((animal) => <AnimalCard key={animal.name} animal={animal}/>) : "No results"}
    </div>
    )
  
}