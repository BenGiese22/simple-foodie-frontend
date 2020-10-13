import React, { Component } from 'react'

import LoadingSpinner from 'react-loader-spinner' 
import RecipeCard from '../../component/recipe-card/recipe-card'

import './recipe-table.css'

class RecipeTable extends Component {

    render () {
        return (
            <>
                {this.props.loading ? <LoadingSpinner className='spinner' type="ThreeDots" color="white" height={80} width={80}/> : null}
                <ul>
                    {this.props.recipes.map((recipe, i) => {
                        return (
                            <RecipeCard 
                                key={i}
                                id={recipe.id} 
                                link={recipe.link} 
                                title={recipe.title} 
                                ingredients={recipe.ingredients}
                                directions={recipe.directions}
                                source={recipe.source}
                                className="card"
                            ></RecipeCard>
                        )
                    })}
                </ul> 
            </>
        )
    }
}

export default RecipeTable
