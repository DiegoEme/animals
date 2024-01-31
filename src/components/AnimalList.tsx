// import { useAnimals } from "../hooks/useAnimals"
import AnimalCard from "./AnimalCard"
import { IAnimalResponse } from "../types"

interface IAnimalList {
  animals: IAnimalResponse
}

export default function AnimalList({animals}: IAnimalList){
  return (
    <div className="flex flex-col gap-2">
      {animals.length > 0 ? animals.map((animal) => <AnimalCard key={animal.name} animal={animal}/>) : "No results"}
    </div>
    )
  
}