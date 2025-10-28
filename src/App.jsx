import {useState} from "react"
import {useEffect} from "react"
import Item from "./components/Item";

export default function App() {
  const [countries, setCountries] = useState([])
const ENDPOINT ="https://restcountries.com/v3.1/all?fields=name,capital,currencies"

useEffect(() => {
    fetch(ENDPOINT) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCountries(data)
      })
    }, []);

    function region(prop){

    }
    
return(
  <>
      {countries.map((item, index) =>{
        {item.name}
        return(
          <div key={index} className="index">
            
            <li>{"Region: " + item.name.common + "Capital: "+item.capital}</li>
    
          </div>
        )
      })}  </>
)
}
