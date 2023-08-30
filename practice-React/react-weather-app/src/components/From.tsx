type FormPopsType ={
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ city, setCity, getWeather }:FormPopsType) => {
  
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="sity" placeholder="都市名" onChange={(e) => setCity(e.target.value)} value={city}/>
      <button type="submit">Get Weather</button>
    </form>
  )
}

export default Form