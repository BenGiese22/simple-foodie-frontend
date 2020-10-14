import React, { Component } from 'react'
import Pag from '@material-ui/lab/Pagination'

import './pagination.css'

class Pagination extends Component {


    render () {

        const pageNumbers = []

        for (let i = 1; i <= Math.ceil(this.props.totalRecipes / this.props.recipesPerPage); i++) {
            pageNumbers.push(i)
        }

        if (pageNumbers.length > 0) {
            return (
              <Pag className="bottom" count={pageNumbers.length} size={'medium'} onChange={(event, page) => this.props.paginate(page)}/>
            )
        } else {
            return null
        }

    }
}

export default Pagination