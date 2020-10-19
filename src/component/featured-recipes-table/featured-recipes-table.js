import React, { Component } from 'react'

import RecipeCard from '../recipe-card/recipe-card'
import LoadingSpinner from 'react-loader-spinner' 
import RecipeApi from '../../service/recipe-api'

import './featured-recipes-table.css'

class FeaturedRecipesTable extends Component {

    state = {
        featuredRecipes: [],
        loading: false,
        service: new RecipeApi()
    }

    componentDidMount() {
        this.handleFeaturedRecipeSearchRequest()
    }

    handleFeaturedRecipeSearchRequest = () => {
        this.setState({
            loading: true
        })
        Promise.all(
            [   this.state.service.getRecipe(9043),
                this.state.service.getRecipe(116)
            ])
        .then((recipes) => {

            recipes.forEach(recipe => {
                let ingredientsStr = recipe.ingredients.replaceAll('[\'', '["').replaceAll('\', \'', '", "').replaceAll('\']', '"]')
                let ingredients = JSON.parse(ingredientsStr)
                recipe.ingredients = ingredients
            })

            this.setState({
                loading: false,
                featuredRecipes: recipes
            })
        })

    }


    render () {

        return (
            <>
                {this.state.loading ? <LoadingSpinner className='spinner' type="ThreeDots" color="white" height={80} width={80}/> : null}
                <div className="featured_title">
                    Featured Recipes
                </div>
                <ul>
                    {this.state.featuredRecipes.map((recipe, i) => {
                        return (
                            <RecipeCard 
                                key={i}
                                id={recipe.id} 
                                link={recipe.link} 
                                title={recipe.title} 
                                ingredients={recipe.ingredients}
                                directions={recipe.directions}
                                source={recipe.source}
                                image={recipe.image}
                                total_prep_time={recipe.total_prep_time}
                                className="card"
                            ></RecipeCard>
                        )
                    })}
                </ul> 
            </>
        )
    }
}

export default FeaturedRecipesTable
