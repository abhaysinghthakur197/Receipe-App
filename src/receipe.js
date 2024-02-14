import React from 'react';
import style from "./recipe.module.css";

const Recipe = ( {title, calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 style={{color: 'orange'}}>{title}</h1>
                <img src={image} alt="dish-image" style={{border: '5px solid black', borderRadius: '5%', width: '80%'}}/>
            <ol style={{}}>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
    
               ))}
            </ol>
            <div style={{backgroundColor: 'yellow', padding: '1px 5px', margin: ' 12px', borderRadius: '6%', width: '70%'}}>
            <p className='menu'> calories:{calories}</p>
            </div>
        </div>
    )
}

export default Recipe;
