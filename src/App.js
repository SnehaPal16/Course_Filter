import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {apiUrl , filterData} from "./data"
import {useState , useEffect} from "react";
import Spiner from "./Components/Spiner";
import {toast} from "react-toastify";

const App = () =>{

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);

    try{
      let response = await fetch(apiUrl);
      let output = await response.json()

      setCourses(output.data);
    }
    catch{
      toast.error("network mai koi dikkat");
    }

    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[])

  return (<div className="min-h-screen flex flex-col">

    <div>
      <Navbar/>
    </div>

    <div className="bg-bgDark2">
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h-[50vh]">
        {
          loading ? (<Spiner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>

    
   
  </div>);
};

export default App;


