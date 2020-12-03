import React, { useEffect, useState } from 'react';
import Recipe from './receipe';
import './App.css';

const App = () => {

  const App_ID = "690f968f";
  const key = "83bc9138a950335e217dae31af2e8f05";




  /////////////////***************************************/////////////////// */
/////////////////////////////////width of the screen ////////////////////////////
/////////////////////////////*******************************////////////////////////// */


  const [windowwidth,setwindowwidth] = useState([window.innerWidth]);

  const changewidth = () =>{
    setwindowwidth(window.innerWidth);
  }
  
  useEffect(() =>{
    window.addEventListener('resize',changewidth)
  })

  ////////////////////*************************** *?????????????//////////////////////      /


  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState([""])

  const [query, setquery] = useState(["chicken"])

  // const Example = `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${key}`; 
  //&from=0&to=3&calories=591-722&health=alcohol-free"


  useEffect(() => {
    console.log("changing");
    getReceipe();
  }, [query]);

  const getReceipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${key}`);



    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);



    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${key}`)
    // .then(response =>{
    //   response.json()
    // })
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

      <h1 className="menu"> Welcome To Our Receipe-Menu</h1>

      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button " type="submit"> Search</button>
      </form>

    

      <div className="recipes">

      
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}>

          </Recipe>))}

      </div>
         <footer>
           <div>
             <h1> abhay</h1>
             {windowwidth}
           </div>
         </footer>
    </div>
  );
};

export default App;
