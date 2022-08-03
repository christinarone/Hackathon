import React, { useEffect, useState } from "react";
//everything inside the {} are named exports from the
//module/library
//React is the exports in 1 whole object
import "./App.css";
import Header from "./components/Header";
import axios from "axios"; //AXIOS INSTALLED!!

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [category, setCategory] = useState("story");
  const [date, setDate] = useState("");
  const [story, setStories] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitted!')
    console.log("searchParam:", searchParam)
    console.log("category:", category)
    console.log("date:",date)
    if(category === "date"){
      console.log('fetch data with this date:', date)
    }
    if(category=== 'author'){
      console.log('fetch data with this author:', searchParam)
    }
    if(category=== 'tag'){
      console.log('fetch data with this tag:', searchParam)
    }
  }

  // useEffect(()=>{
  //   console.log("searchParam:", searchParam)
  // }, [searchParam ])

  useEffect(() => {
    fetch(`http://hn.algolia.com/api/v1/search?query= ${searchParam}`)
      .then((res) => res.json())
      .then((data) => {
      })
    })
  // useEffect(()=>{
  //   console.log("category:", category)
  // }, [category ])

  // useEffect(()=>{
  //   console.log("date:",date)
  // }, [date])

  return (
    <div>
      <Header
        searchParam={searchParam}
        category={category}
        date={date}
        setCategory={setCategory}
        setSearchParam={setSearchParam}
        setDate={setDate}
        handleSubmit={handleSubmit}
        //these above (in sky blue) are all properties/props and they are helping us to manage state from 
        //parent to child component
      />
    </div>
  );
}

export default App;
