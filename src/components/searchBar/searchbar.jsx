import React from "react";
import './searchbar.css'

const searchbar = ({value, searchChangeHandler, searchSubmitHandler}) => {
  return (
    <form action="" className="searchForm" onSubmit={(e)=>searchSubmitHandler(e)}>
      <input type="text" placeholder="Search Products" value={value} onChange={(e)=>{searchChangeHandler(e.target.value)}} />
    </form>
  );
};

export default searchbar;
