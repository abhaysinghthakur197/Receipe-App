import React, { useEffect, useState } from 'react';
import Recipe from './receipe';
import './App.css';

const App = () => {

  const App_ID = "690f968f";
  const key = "83bc9138a950335e217dae31af2e8f05";


  const [windowwidth,setwindowwidth] = useState([window.innerWidth]);

  const changewidth = () =>{
    setwindowwidth(window.innerWidth);
  }
  
  useEffect(() =>{
    window.addEventListener('resize',changewidth)
  })

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState([""])

  const [query, setquery] = useState(["chicken"])


  useEffect(() => {
    getReceipe();
  }, [query]);

  const getReceipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${key}`);
    const data = await response.json();
    setRecipes(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setquery(search);
    setSearch('')
  };


  return (
    <div className="App">
      <h1 className='receipe-app'>Receipe <span className='app-span'>App</span></h1>
      <h4 className="menu" > Welcome To Our Receipe-Menu</h4>
      <p className='menu'>Search for any dish in search box, it will give the receipe of dish.</p>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button " type="submit"> Search</button>
      </form>

      <div className="recipes">

      
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          image={recipe.recipe.image}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}>

          </Recipe>))}

      </div>
    </div>
  );
};

export default App;
