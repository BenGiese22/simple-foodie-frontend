import React, { Component } from 'react'

import LoadingSpinner from 'react-loader-spinner' 
// import TableContainer from '@material-ui/core/TableContainer'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableRow from '@material-ui/core/TableRow'
// import TableCell from '@material-ui/core/TableCell'
// import Paper from '@material-ui/core/Paper'

import './recipe-table.css'

class RecipeTable extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // if(this.props.loading) {
    //     return <LoadingSpinner type="ThreeDots" color="black" height={80} width={80}/>
    // }

  
    // {this.state.loading ? <LoadingSpinner type="ThreeDots" color="black" height={80} width={80}/> : <RecipeTable getRecipes={this.state.recipes} />}
    // render(
    //     return <ul>
    //         {recipes.map((recipe,i) => (
    //             <li key={i}>
    //                 <a href={recipe.link}>{recipe.title}</a>
    //             </li>
    //         ))}
    //     </ul>
    // )

    // return (
    //     <ul>
    //         {recipes.map((recipe, i) => {
    //             <li key={i}>
    //                 <a href={recipe.link}>{recipe.title}</a>
    //             </li>
    //         })}
    //     </ul>
    // )


    render () {
        // console.log(window.location.href)
        const url = window.location.href + 'recipe/'
        return (
            <>
                {this.props.loading ? <LoadingSpinner className='spinner' type="ThreeDots" color="black" height={80} width={80}/> : null}
                <ul>
                    {this.props.recipes.map((recipe, i) => {
                        return (
                            <li key={i}>
                                <a className='link' href={url+recipe.id}>{recipe.title}</a>
                            </li>
                        )
                    })}
                </ul> 
            </>
        )
    }
}

export default RecipeTable;


// class RecipeTable extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             recipes: [],
//             getRecipes: this.props.getRecipes
//         }
//     }

//     getRecipes () {
//         let data = this.state.getRecipes();
//         if (this.state.data !== data) {
//             this.setState({
//                 recipes: data
//             })
//         }
//     }

//     render () {
//         return (
//             <ul>
//                 {this.state.recipes.map((recipe, i) => {
//                     return (
//                         <li key={i}>
//                             <a href={recipe.link}>{recipe.title}</a>
//                         </li>
//                     )
//                 })}
//             </ul>
//         )
//     }
// }

// export default RecipeTable

/*
 <div id='recipe-table'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {this.state.recipes.map((recipe, index) => (
                                <TableRow key={index}>
                                    <TableCell component='th' scope='row'>
                                        {recipe.title}
                                    </TableCell>
                                    <TableCell align='right'>{recipe.link}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
*/