import React, { Component } from 'react'

import './recipe-card.css'

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'

class RecipeCard extends Component {

    state = {
        expanded: false
    }

    render () {

        const handleExpandClick = () => {
            this.setState((state) => {
                return {expanded: !state.expanded}
            })
        }

        return (
            <Card className="root">
                <CardHeader
                    action={
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
                    }
                    title={this.props.title}
                    subheader={this.props.source}
                />
                {/* <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        I don't think we'll use this
                    </Typography>
                </CardContent> */}
                {/* <CardActions disableSpacing>
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
                </CardActions> */}
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6">
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
                    </Typography>
                </CardContent>
              </Collapse>
            </Card>
        )
    }

}

export default RecipeCard;