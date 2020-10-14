import React, { Component } from 'react'

import RecipeApi from '../../service/recipe-api'
import LoadingSpinner from 'react-loader-spinner'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import './recipe.css'


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
        this.state.service.getRecipe(this.state.id).then((recipe) => {

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

            this.setState({
                recipe: recipe
            })
        })
    }

    render () {
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
                            <Paper className="paper_header" elevation={12}>
                                <div class="section_header">
                                    Ingredients
                                </div>
                                <div class="body">
                                    {this.state.ingredients}
                                </div>
                            </Paper>

                            <Paper className="paper_header" elevation={12}>
                                <div class="section_header">
                                    Directions
                                </div>
                                <div class="body">
                                    {this.state.directions}
                                </div>
                                <div class="source">
                                    <a class="link" href={this.state.link}>Source: {this.state.source}</a>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }
}

export default Recipe;