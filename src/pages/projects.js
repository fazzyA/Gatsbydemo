import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        maxHeight: 270,
        margin: 5,
      display: 'inline-block'
    },
  });

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        edges {
          node {
            githubLink
            title
            demoLink
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulProjects.edges)
  const projectList = data.allContentfulProjects.edges;
  const classes = useStyles();
  return (
      <div>
          {
              projectList.map((item)=>(
                <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={item.node.image.fluid.src}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     {item.node.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          
                  

              ))
          }
      </div>
  )
}

export default Projects

