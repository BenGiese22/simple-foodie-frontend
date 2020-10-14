import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import RecipeTable from '../../component/recipe-table/recipe-table'
import Pagination from '../../component/pagination/pagination'

import RecipeApi from '../../service/recipe-api'

import './search.css'

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class Search extends Component {

    state = {
        field: 'title',
        query: '',
        message: '',
        recipes: [],
        loading: false,
        currentPage: 1,
        recipesPerPage: 12,
        service: new RecipeApi()
    }

    componentDidMount() {
        this.timer = null;
    }

    // Handles query input field change
    handleFieldChange = (newField) => {
        this.setState((state) => {
            return {field: newField};
        });
    }

    handleSearchWait = (newQuery) => {
        clearTimeout(this.timer);
        
        this.setState(() => {
            return {query: newQuery};
        })

        // Start loading
        this.setState(() => {
            return {loading: true};
        })

        this.timer = setTimeout(this.handleSearchRequest, WAIT_INTERVAL);
        
    }
    // If user presses enter, bypass WAIT_INTERVAL and search
    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.handleSearchRequest();
        }
    }
    
    handleSearchRequest = () => {
        // Handle empty query, shouldn't make callout
        if (this.state.query === '') {
            this.setState({
                recipes: [],
                loading: false
            })
            return;
        }

        this.state.service.getQuery(this.state.field, this.state.query).then((recipes) => {
            console.log(recipes)

            // Stop loading
            this.setState(() => {
                return {loading: false};
            })

            this.setState({
                recipes: recipes
            })
        }) 
    }

    updatePage = (pageNumber) => {
        console.log(pageNumber);
        this.setState(() => {
            return {currentPage : pageNumber}
        })
    }

    render () {
        const indexOfLastRecipe = this.state.currentPage * this.state.recipesPerPage;
        const indexOfFirstRecipe = indexOfLastRecipe - this.state.recipesPerPage;
        const currentRecipes = this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
        return (
            
            <div id='search'>
                <h2 className='header'>Recipe Search</h2>
                <Grid container direction="row">
                    <Grid item md={9} xs={7} align="left">
                        <TextField
                            className='searchBar'
                            onChange={event=>this.handleSearchWait(event.target.value)}
                            onKeyDown={this.handleKeyDown}
                            value={this.state.query}
                            variant="outlined"
                            placeholder='Search...'
                            type='text'
                        />
                    </Grid>
                    <Grid item md={3} xs={5}>
                        <FormControl variant="outlined" className='formControl'>
                            <NativeSelect
                                value={this.state.field}
                                name='Field'
                                onChange={event => this.handleFieldChange(event.target.value)}
                            >
                                <option value={'title'}>Title</option>
                                <option value={'ingredients'}>Ingredients</option>
                                <option value={'directions'}>Directions</option>
                            </NativeSelect>
                         </FormControl>
                    </Grid>
                </Grid>

                <RecipeTable recipes={currentRecipes} loading={this.state.loading}/>
                <Grid container alignContent="center" alignItems="center" justify="center" direction="row">
                    <Pagination recipesPerPage={this.state.recipesPerPage} totalRecipes={this.state.recipes.length} paginate={this.updatePage}/>
                </Grid>
            </div>
        )
    }
}

export default Search