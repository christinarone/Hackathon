import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; //AXIOS INSTALLED!!

function App() {

  render() 
    const { state, handleChange, handleSubmit, selectHandleChange } = this.props
  return (
    <div>
    <form className="label" onKeyUp={handleSubmit}>
      <label>
        <input
          placeholder="HACKATHON!!" type="text" value={state.input} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" id="btn" />
    </form>

    <label className="label" for="articles" id="search-by">
      Search By:{" "}
    </label>
    <select onChange={selectHandleChange} name="articles" id="articles">
      <option value="title">Title</option>
      <option value="tag">Tag</option>
      <option value="author">Author</option>
      <option value="creation-date">Date Created</option>
    </select>
  </div>
  );
  
}

export default App;
