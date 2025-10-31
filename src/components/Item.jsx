import Capital from "./Capital";
import Currency from "./Currency";


export default function Item({ country }) {

  const region = country.region || "N/A"
 
  // If country.currencies is defined,  get  keys.
  const currencyKeys = country.currencies ? Object.keys(country.currencies) : null;
  
  
  const currencyName = 
  //check for currency
      currencyKeys?.length > 0 ? country.currencies[currencyKeys[0]]?.name : "N/A";
  
  //Access Capital 
  const capitalName = country.capital?.[0] || "N/A";
  
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital name={capitalName}</p>
      <p>Currency name={currencyName}</p>
      <p>Region: {region}</p>
    </div>
  );
}