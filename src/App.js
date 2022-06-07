import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/header/SearchBar";
import Result from "./components/result/Result";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [data, setData] = useState(false);
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setData(true);
    const url = searchApi + search;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setData(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h2>Our Food Recipes</h2>
      <SearchBar
        data={data}
        search={search}
        setSearch={setSearch}
        handleClick={handleClick}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <Result
              key={recipe.idMeal}
              recipe={recipe}
          />
        )) : "No Results."}
      </div>
    </div>
  );
}

export default App;
