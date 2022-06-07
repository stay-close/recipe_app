import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/header/SearchBar";
import Result from "./components/result/Result";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h2>Our Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
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
