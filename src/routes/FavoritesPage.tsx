import AnimalCard from "../components/AnimalCard"
import { IAnimalResponse } from "../types"

export default function Favorites () {
  const myAnimals = localStorage.getItem("myFavAnimals")

  let favoriteAnimals: IAnimalResponse = []

  if(myAnimals !== null){
    favoriteAnimals  = JSON.parse(myAnimals)
  }

  
  return (
    <div>
      {favoriteAnimals.map((animal) => <AnimalCard key={animal.name} animal={animal}/>) }
    </div>
  )
}