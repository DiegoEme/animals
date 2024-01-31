import AnimalList from "../components/AnimalList"
import { IAnimalResponse } from "../types"

export default function Favorites () {
  const myAnimals = localStorage.getItem("myFavAnimals")

  let favoriteAnimals: IAnimalResponse = []

  if(myAnimals !== null){
    favoriteAnimals  = JSON.parse(myAnimals)
  }

  
  return (
    <div className='flex flex-col justify-center items-center gap-10 mt-5'>
      {<AnimalList animals={favoriteAnimals}/>}
    </div>
  )
}