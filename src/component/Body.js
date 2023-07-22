import SearchComponent from "./Search";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../common/restaurants";
import { useEffect, useState } from "react";
import useOnline from "../common/useOnline";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";



const BodyComponent = () =>{
  //let filteredRestaurantsArray=[]
  const [filteredRestaurantsArray, setfilteredRestaurants] = useState(restaurants);
  
  
  const isOnline = useOnline();
    
  

  function filteredRestaurants(restaurants){
    console.log("filtered......" ,restaurants)
   // filteredRestaurantsArray.push(restaurants)

   setfilteredRestaurants(restaurants)
  }

  function filteredTopRatedRestaurants(){
    let TopRatedRastaurants = filteredRestaurantsArray.filter((res) =>res.avgRating>4)
    setfilteredRestaurants(TopRatedRastaurants);
  }
  
  useEffect(() =>{
    console.log("useEffect called");
    const result = fetch("https://hn.algolia.com/api/v1/search"

    );
    result.then((response)=>console.log(response));
  },[]);
  
  if(!isOnline){
    return<h1>Please check your internet connection</h1>;
  }
  return filteredRestaurantsArray.length === 0 ? <h1>Loading......</h1>:(

    <>
    <div className="filter-search-bar">
      <SearchComponent filteredRestaurants={filteredRestaurants} />
      <button className="top-rated" onClick={filteredTopRatedRestaurants}>Top Rated Restaurants</button>

    </div>

   <div className="res-container">
        {
         filteredRestaurantsArray.map((curEl)=>{
          // <Link to ={"/restaurant/"}>
           
            return <RestaurantCard key={curEl.id} restaurants={curEl}/>
      // </Link>      
         })   
        
}
</div>


    </>
    
  );
}
  
  export default BodyComponent;
  