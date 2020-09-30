import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'

import RecipeApi from '../../service/recipe-api'
import LoadingSpinner from 'react-loader-spinner'

import Grid from '@material-ui/core/Grid'

import './recipe.css'

const BASE_URL = 'http://localhost:3000';

class Recipe extends Component {

    state = {
        id: this.props.id,
        link: '',
        title: '',
        ingredients: '',
        directions: '',
        source: '',
        loading: false,
        service: new RecipeApi()
    }

    componentDidMount() {
        // this.handleRecipeRequest(this.state.id);
        this.state.service.getRecipe(this.state.id).then((recipe) => {
            console.log(recipe);

            this.setState({
                link: recipe.link,
                title: recipe.title,
                ingredients: recipe.ingredients,
                directions: recipe.directions,
                source: recipe.source
            })
        })
    }

    handleRecipeRequest = (id) => {
        console.log('received id: ' + id);
        this.state.service.getRecipe(id).then((recipe) => {
            console.log(recipe);

            this.setState({
                recipe: recipe
            })
        })
    }

    render () {
        console.log(window.location.hostname);
        console.log(window.location.pathname);
        console.log(window.location.href);
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
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <div id="title">
                                <a class="link" href={this.state.link}>{this.state.title}</a>
                            </div>
                            <div class="section_header">
                                Ingredients
                            </div>
                            <div class="body">
                                {this.state.ingredients}
                            </div>
                            <div class="section_header">
                                Directions
                            </div>
                            <div class="body">
                                {this.state.directions}
                            </div>
                            <div class="source">
                                {this.state.source}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }
}

export default Recipe;