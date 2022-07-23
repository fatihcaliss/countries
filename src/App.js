import axios from "axios";
import { useEffect,useState } from "react";
import LogoNav from "./components/LogoNav";
import SearchForm from "./components/SearchForm";
import CountryList from "./components/CountryList";
import gif from "../src/assets/loading.gif";


function App() {
  const [countries, setCountries] = useState([]);
  const [searchingCountries, setSearchingCountries] = useState([]);
  const [load, setLoad] = useState(true);

  const url = `https://restcountries.com/v2/all`;
  
  const getData = async () => {
    const {data} = await axios.get(url);
    console.log(data);
    setCountries(data);
    setSearchingCountries(data);
    setLoad(false);
  }
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>
      <LogoNav/>
      <main className="container">
        <SearchForm  countries={countries}  setCountries={setCountries} searchingCountries={searchingCountries} setSearchingCountries={setSearchingCountries}/>
        {load ? <img src={gif} alt="loading.gif" className="d-block m-auto"/> : <CountryList searchingCountries={searchingCountries}/>} 
      </main>

    </div>
  );
}

export default App;
