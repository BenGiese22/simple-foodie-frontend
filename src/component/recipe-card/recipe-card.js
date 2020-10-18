import React, { Component } from 'react'

import './recipe-card.css'

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
// import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class RecipeCard extends Component {

    state = {
        expanded: false
    }

    handleNavigateToRecipe = () => {
        let url = '/recipe/' + this.props.id
        window.open(url, '_blank');
    }

    render () {

        const handleExpandClick = () => {
            this.setState((state) => {
                return {expanded: !state.expanded}
            })
        }

        const prep_time_not_available = this.props.total_prep_time === 0 ? true : false
        const total_prep_time = this.props.total_prep_time
        
        return (
            <Card className="root">
                {/* <CardHeader
                    action={
                        <IconButton>
                            <OpenInNewIcon
                                fontSize="small"
                                onClick={this.handleNavigateToRecipe}
                            />
                        </IconButton>
                    }
                    title={this.props.title}
                    subheader={this.props.source}
                /> */}
                <Grid container direction="row">
                    <Grid className="card_image_grid" item xs={4}>
                        <img className="card_recipe_image" src={this.props.image} alt="recipe_image"/>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container direction="row">
                            <Grid item xs={11}>
                                <div className="card_info_section">
                                    <div className="card_title">
                                        {this.props.title}
                                    </div>

                                    <Grid container direction="row">
                                        <Grid item xs={6}>
                                            <div className="card_prep_time">
                                                {prep_time_not_available ? '' : total_prep_time + ' minutes'}
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <a className="card_source" href={this.props.link}>{this.props.source}</a>
                                            </div>     
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton className="recipe_button">
                                    <OpenInNewIcon
                                        fontSize="small"
                                        onClick={this.handleNavigateToRecipe}
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <CardMedia
                    className="media"
                    height="140"
                    image={this.props.image}
                    title={this.props.title}
                /> */}
                <CardActions className="card_action_root" disableSpacing>
                        <IconButton
                            className={clsx("expand", {
                              ["expandOpen"]: this.state.expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent className="card_content">
                    {/* <Typography variant="h6">
                        Ingredients:
                    </Typography>
                    <Typography paragraph>
                        {this.props.ingredients}
                    </Typography>
                    <Typography variant="h6">
                        Directions:
                    </Typography>
                    <Typography paragraph>
                        {this.props.directions}
                    </Typography> */}
                    <Grid container direction="row">
                        <Grid className="ingredients_section" item sm={12} md={4}>
                            <Typography variant="h6">
                                Ingredients:
                            </Typography>
                            <ul className="ingredients_list">
                                    {this.props.ingredients.map((ingredient, i) => {
                                        return (
                                            <li key={i}>{ingredient}</li>
                                        )
                                    })}
                            </ul> 
                        </Grid>
                        <Grid item sm={12} md={8}>
                            <Typography variant="h6">
                                Directions:
                            </Typography>
                            <Typography paragraph>
                                {this.props.directions}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
              </Collapse>
            </Card>
        )
    }

}

export default RecipeCard;