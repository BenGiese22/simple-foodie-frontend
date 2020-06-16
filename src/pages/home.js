import React, { Component } from 'react'
import RecipeApi from '../service/recipe-api'
import Search from '../component/search/search'

class HomePage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            recipes: []
        }
    }

    componentDidMount () {
        const service = new RecipeApi()
        service.getAllRecipes().then((recipes) => {
            this.setState({
                recipes: recipes
            })
        })
    }


    showAllRecipes (recipes) {
        return (
            <ul>
                {recipes.map((recipe, i) => {
                    return (
                        <li key={i}>
                            <a href={recipe.link}>{recipe.title}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }

    // render () {
    //     return (
    //         <div id='home'>
    //             <h1>hello</h1>
    //             {this.showAllRecipes(this.state.recipes)}
    //         </div>
    //     )
    // }

    render () {
        return (
            <div id='home'>
                <Search/>
            </div>
        )
    }
}

export default HomePage