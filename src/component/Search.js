import { restaurants } from "../common/restaurants";
import React, { useState } from "react";
let search="";


const SearchComponent = (props) => {
  function filteredRestaurant(search){
    console.log("filtered Restaurant" ,search)

   let filteredRestaurants= restaurants.filter(restaurant =>restaurant.name.toLowerCase().includes(search.toLowerCase()));
   props.filteredRestaurants(filteredRestaurants);
    }

    

  // function filterRestaurants(search) {
  //   let filteredRestaurants = restaurants.filter((restaurant) =>
  //     restaurant.name.toLowerCase().includes(search.toLowerCase())
  //   );

    // props.filteredRestaurants(filteredRestaurants);
  


//   const [searchText, setSearchText] = useState("");

//   const handle = (e) => {
//     setSearchText(e.target.value);
    
//   };



    return (
      <div className="search">
        
        <input type="text" onChange={(e) => {
          search=e.target.value;
          filteredRestaurant(search);
        }}
        className="search-text"></input>
        <button onClick={(e) => (filteredRestaurant(search))}>Search</button>
        
      </div>
    );
  };
export default SearchComponent;