import {useState, KeyboardEvent, ChangeEvent} from "react"

interface IAnimalSearchProps {
  onAnimalChange: (animal: string) => void
}

export default function AnimalInput ({onAnimalChange}: IAnimalSearchProps)  {
  const [animal, setAnimal] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnimal(e.target.value)
  }

  const handleSearch = () => {
    onAnimalChange(animal)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      handleSearch()
    }
  }

  return (
    <div className="mt-5 flex gap-5">
      <input
        className="p-2 border-2"
        type="text"
        placeholder="Enter Animal Name"
        value={animal}
        onChange = {handleInputChange}
        onKeyPress={handleKeyPress}
      />
    <button 
      className="px-6 rounded-lg bg-slate-600 text-white" 
      onClick={handleSearch}>Search</button>
    </div>
  )
}