// src/App.jsx

import { useState, useEffect } from "react";
import Item from "./components/Item";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 

export default function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("all"); 

  const handleSearch = (event) => {
    event.preventDefault();
    const newTerm = event.target.elements.searchInput.value;
    if (newTerm) {
      setSearch(newTerm); 
      event.target.elements.searchInput.value = ''; 
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    //url
    const urlSegment = search === "all" ? "all" : `name/${search}`; 
    const FIELDS = "?fields=name,capital,currencies,region";
    const FINAL_ENDPOINT = `https://restcountries.com/v3.1/${urlSegment}${FIELDS}`;

    fetch(FINAL_ENDPOINT) 
      .then(res => {
        if (!res.ok) {
           throw new Error(`Failed to fetch!`);
        }
        return res.json();
      })
      .then(data => {
        const countryArray = Array.isArray(data) ? data : [data];
        setCountries(countryArray);
      })
      .catch(() => {
        setError(`Couldn't find data for "${search}".`);
        setCountries([]);
      })
      .finally(() => {
        setLoading(false);
      });
      //runs fetch when search changes
  }, [search]); 

  // render

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">Error: {error}</p>; 
  
  return (
    <div className="app-container">
      <Header />
      
      <main className="app-main">
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="search-form">
          <input name="searchInput" type="text" placeholder="Search country name" className="search-input"/>
          <button type="submit" className="search-button">Search</button>
          <button type="button" onClick={() => setSearch("all")} className="reset-button">Show All</button>
        </form>

        <h2>Showing {countries.length} Results</h2>
        
        
        <div className="results-container">
          {countries.map((country, index) => (
            <Item key={index} country={country} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}