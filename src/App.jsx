import {useState} from "react"
import {useEffect} from "react"
import Item from "./components/Item";
export default function App() {
  const [countries, setCountries] = useState([])
const ENDPOINT ="https://restcountries.com/v3.1/independent?status=true&fields=languages,capital"

useEffect(() => {
    fetch(ENDPOINT) 
      .then(res => res.json())
      console.log(countries)
      .then(data => {
        setCountries(data)
        console.log(data)
        
      })
    }, []);

    
    
return(
  <>
  {countries.map((item, index) =>{
    return(
      <div key={index} className="index">
        <p>{item.capital}</p>
      </div>
    )
  })}
  </>
)
}
