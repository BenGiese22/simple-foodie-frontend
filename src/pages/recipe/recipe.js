import React, { Component } from 'react'

import RecipeApi from '../../service/recipe-api'
import LoadingSpinner from 'react-loader-spinner'

import Grid from '@material-ui/core/Grid'

import './recipe.css'


class Recipe extends Component {

    state = {
        id: this.props.id,
        link: '',
        title: '',
        ingredients: [],
        directions: '',
        source: '',
        image: '',
        total_prep_time: 0,
        loading: false,
        service: new RecipeApi()
    }

    componentDidMount() {
        this.state.service.getRecipe(this.state.id).then((recipe) => {

            let ingredientsStr = recipe.ingredients.replaceAll('\'', '"')
            let ingredients = JSON.parse(ingredientsStr)

            this.setState({
                link: recipe.link,
                title: recipe.title,
                ingredients: ingredients,
                directions: recipe.directions,
                source: recipe.source,
                image: recipe.image,
                total_prep_time: recipe.total_prep_time
            })
        })
    }

    handleRecipeRequest = (id) => {
        console.log('received id: ' + id);
        this.state.service.getRecipe(id).then((recipe) => {
            console.log(recipe)
            this.setState({
                recipe: recipe
            })
        })
    }


    render () {

        const prep_time_not_available = this.state.total_prep_time === 0 ? true : false
        const total_prep_time = this.state.total_prep_time

        if (this.state.recipe === null) {
            return (
                <div id='recipe'>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <LoadingSpinner type="ThreeDots" color="black" height={80} width={80}/>
                        </Grid>
                    </Grid>
                </div>
            )
        } else {
            return (
                <div id='recipe'>
                    <Grid className="page_container" container spacing={0}>
                        <Grid className="image_grid" item lg={6} md={12} sm={12} xs={12}>
                            <img className="recipe_image" src={this.state.image} alt="recipe"></img>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <div className="title_section">
                                <div className="title">
                                    {this.state.title}
                                </div>
                                <div className="prep_time">
                                    Total Preperation Time: {prep_time_not_available ? 'N/A' : total_prep_time + ' minutes'}
                                </div>
                                <div>
                                    <a className="source" href={this.state.link}>{this.state.source}</a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div className="section_header">
                                Ingredients
                            </div>
                            <div className="body">
                                {/* {this.state.ingredients} */}
                                <ul className="ingredients_list">
                                {this.state.ingredients.map((ingredient, i) => {
                                    return (
                                        <li key={i}>{ingredient}</li>
                                    )
                                })}
                                </ul> 
                            </div>
                        </Grid>
                        <Grid item md={1}>
                            
                        </Grid>
                        <Grid item md={7} xs={12}>
                            <div className="section_header">
                                Directions
                            </div>
                            <div className="body">
                                {this.state.directions}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }
}

export default Recipe;