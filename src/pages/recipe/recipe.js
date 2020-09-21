import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import RecipeApi from '../../service/recipe-api'
import LoadingSpinner from 'react-loader-spinner'

import Grid from '@material-ui/core/Grid'

import './recipe.css'

const BASE_URL = 'https://simple-foodie-frontend.herokuapp.com';

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

    homeButton = () => {
        console.log('home clicked')
        // window.location.href = BASE_URL
    }

    externalButton = () => {
        console.log('external clicked')
        // window.location.href = this.state.link
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
                            <div class="title">
                                {this.state.title}
                            </div>
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<ArrowBackIosIcon />}
                                onClick={() => this.homeButton()}
                            >Home</Button>
                            <Button
                                variant="contained"
                                color="default"
                                endIcon={<ArrowForwardIosIcon />}
                                onClick={() => this.externalButton()}
                            >External Link</Button>
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
                                Source: {this.state.source}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }
}

export default Recipe;