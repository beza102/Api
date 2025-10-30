import {useState, useEffect} from "react"
import Item from "./components/Item";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 


export default function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] =useState(null);
  const[loading, setLoading]= useState(true);
const ENDPOINT ="https://restcountries.com/v3.1/all?fields=name,capital,currencies"

useEffect(() => {
    setLoading(true);
    fetch(ENDPOINT) 
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        setLoading(false);
      })

      .catch(() => {
        setError("Something went wrong.");
        setLoading(false);
      });
  }, []);

    


  if(loading) return <p>Loading...</p>  
  if(error) return <p>{error}</p> 
  

   
return (
  <div>
    <Header />

    <h1>Countries List</h1>
    <ul>
      {countries.map((country, index) => (
        <li key={index}>
          <Item country={country} />
        </li>
      ))}
    </ul>

    <Footer />
  </div>
);

}