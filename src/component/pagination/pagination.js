import React, { Component } from 'react'
import Pag from '@material-ui/lab/Pagination'

class Pagination extends Component {

    // state = {
    //     pageNumbers: []
    // }

    // componentDidUpdate() {
    //     if(this.props.recipes.length === 0) {
    //        console.log('still loading'); 
    //     } else {
    //         console.log(this.props.totalRecipes);
    //         console.log(this.props.recipesPerPage);
    //         console.log(this.state.pageNumbers);

    //         let temp = [];
    //         for(let i = 1; i <= Math.ceil(this.props.totalRecipes / this.props.recipesPerPage); i++) {
    //             temp.push(i);
    //         }
    //         this.setState({ pageNumbers: temp})
    //     }
    // }

    render () {

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.props.totalRecipes / this.props.recipesPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
          <Pag  count={pageNumbers.length} onChange={(event, page) => this.props.paginate(page)}/>
        )

        // return (
        //     <nav>
        //       <ul className='pagination'>
        //         {pageNumbers.map(number => (
        //           <li key={number} className='page-item'>
        //             <a onClick={() => this.props.paginate(number)} href='javascript:void(0)' className='page-link'>
        //               {number}
        //             </a>
        //           </li>
        //         ))}
        //       </ul>
        //     </nav>
        // )
    }
}

export default Pagination;