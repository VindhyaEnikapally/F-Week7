{/*import './App.css'
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import StateDemo from './components/StateDemo';
import StateDemoPrac from './components/StateDemo';
import FormDemo from './components/FormDemo';
import FormAssgn from './components/FormAssgn';
import TaskManager from './components/TaskManager';
import SideEffects from './components/SideEffects';
import CountryCard from './components/CountryCard';
import CountryList from './components/CountryList';

function App(){

  const messages=[
    {
      message1:"Good Morning",
      message2:"Hello"
    },
    {
      message1:"Good Afternoon",
      message2:"How Are you"
    },
    {
      message1:"Good Evening",
      message2:"Bye"
    },
  ];


  //state (optional)
  {/*let username="vindhya";
  let person={
    pid:100,
    name:"vindhuu",
  };
  let marks=[90,98,95];

  //non-parameterized func (event handling)
  const test1=()=>{
    console.log('test1 called')
  }

  //parameterized func (event handling)
  const test2=(a)=>{
    console.log(`test2 called and a is ${a}`)
  }*/}

  //it should return a react element (mandatory)
  {/*return(
    <div className='text-center border-2 p-24'>
      <h1 className='text-5xl'>Form</h1>
      {/*<StateDemo />*/}
      {/*<FormDemo />*/}
      {/*<FormAssgn />*/}
      {/*<TaskManager />*/}
      {/*<SideEffects />*/}
      {/*<SearchBar />*/}
      {/*<CountryList />*/}

      {/*{
        messages.map((msgObj,index)=><Test1 messages={msgObj} key={index}/>)
      }
      <Test2 /> */}
      {/* username*/}
      {/*<h2 className='text-3xl'>Username:{username}</h2> */}
      {/*person object*/}
      {/*<h2>{person.pid}</h2>*/}
      {/*<h2>{person.name}</h2>*/}
      {/*marks*/}
      {/*{
        marks.map((m,i)=><h2 key={i}>{m}</h2>)
      }*/}

      {/*<button onClick={test1} className='bg-amber-500'>click</button>
      <button onClick={()=>test2(100)} className='bg-amber-600'>click</button> */}
    {/*</div>
  )
}
export default App;
*/}

//jsx -javascript syntax extension (similar to html)



import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredCountries(countries);
      return;
    }

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Country Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <h3>Loading countries...</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;