import React, { Component } from 'react'

import RecipeCard from '../recipe-card/recipe-card'
import RecipeApi from '../../service/recipe-api'

import './featured-recipes-table.css'

class FeaturedRecipesTable extends Component {

    state = {
        featuredRecipes: [],
        service: new RecipeApi()
    }

    componentDidMount() {
        this.handleFeaturedRecipeSearchRequest()
    }

    handleFeaturedRecipeSearchRequest = () => {

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
                featuredRecipes: recipes
            })
        })

    }


    render () {

        return (
            <>
                <div className="featured_title">
                    Featured Recipes:
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
