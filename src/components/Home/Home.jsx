import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import Makeup from '../../assets/makeup.jpg';
import Valleyball from '../../assets/volleyball.png'
import Cake from '../../assets/rainbow-mille-layer-crepe-cake-no-bake-200x200.jpg';
import Bull from '../../assets/bulldog.jpg';
import Room from '../../assets/Room.jpg';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    fontFamily: 'IndieFlower',
    underline: 'none',
  },
  gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px,"
  },
//   text: {
//       color: pink,
//   },
  media: {
    height: 150,
    paddingBottom: '10px',
  },
});

function Home(props) {
    const classes = useStyles(props);
    return (
        <div className="Home">
            <Grid container spacing={4} className={classes.gridContainer} justify="center">
                <Grid  item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea >
                        <CardMedia
                            className={classes.media}
                            image={Valleyball}
                            title="About Me"
                        />
                        <CardContent>
                            <Typography className={classes.root} gutterBottom variant="h5" component="h2">
                            About Me
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Talk about myself. <br/>Right now, I am practicing a lot <br/>to join my school team.<br/><br/>ただいま学校のバレーボールチームに<br/>入れるよう特訓中。
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small"color="secondary" component={Link} to="/aboutme">
                            Learn More
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid Grid  item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Makeup}
                                title="Makeup"
                            />
                            <CardContent>
                                <Typography className={classes.root} gutterBottom variant="h5" component="h2">
                                Fashion & Makeup
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I love fashion and makeup!!<br/>I wish I had more money so I can buy more cute clothes and makeup stuff.<br/>
                                ファッションとメイクが大好き！<br/>もっとお金があれば<br/>もっとお買い物できるんだけどなあ。
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="secondary" component={Link} to="/makeup">
                                Learn More
                            </Button>
                            </CardActions>
                    </Card>    
                </Grid>
                <Grid Grid  item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Cake}
                                title="Cooking"
                            />
                            <CardContent>
                                <Typography className={classes.root} gutterBottom variant="h5" component="h2">
                                Cooking
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I love eating new foods, especially Asian foods!! Cooking is fun (except doing dishes..)<br/>始めての食べ物に挑戦するのって楽しい<br/>特にアジアの食べ物！<br/>お料理って楽しい（<br/>片付けは嫌だけど。。。）
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="secondary" component={Link} to="/cooking">
                                Learn More
                            </Button>
                            </CardActions>
                        </Card>
                </Grid>
                <Grid Grid  item xs={12} sm={6} md={4}>

                        <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Bull}
                                title="Romeo"
                            />
                            <CardContent>
                                <Typography className={classes.root} gutterBottom variant="h5" component="h2">
                                Romeo
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I love fashion and makeup!!<br/>I wish I had more money so I can buy more cute clothes and makeup stuff.<br/>
                                ファッションとメイクが大好き！<br/>もっとお金があれば<br/>もっとお買い物できるんだけどなあ。
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="secondary" component={Link} to="/romeo">
                                Learn More
                            </Button>
                            </CardActions>
                        </Card>

                </Grid>
                <Grid Grid  item xs={12} sm={6} md={4}>

                        <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Room}
                                title="Roomdecor"
                            />
                            <CardContent>
                                <Typography className={classes.root} gutterBottom variant="h5" component="h2">
                                Room Decor
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I love eating new foods, especially Asian foods!! Cooking is fun (except doing dishes..)<br/>始めての食べ物に挑戦するのって楽しい<br/>特にアジアの食べ物！<br/>お料理って楽しい（<br/>片付けは嫌だけど。。。）
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="secondary" component={Link} to="/roomdecor">
                                Learn More
                            </Button>
                            </CardActions>
                        </Card>
                </Grid>
                <Grid Grid  item xs={12} sm={6} md={4}>

                        <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={Valleyball}
                                title="Volleyball"
                            />
                            <CardContent>
                                <Typography className={classes.root} gutterBottom variant="h5" component="h2" >
                                Volleyball
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I play volleyball. <br/>Right now, I am practicing a lot <br/>to join my school team.<br/><br/>ただいま学校のバレーボールチームに<br/>入れるよう特訓中。
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="secondary" component={Link} to="/volleyball">
                                Learn More
                            </Button>
                            </CardActions>
                        </Card>
                </Grid>
            </Grid>
        </div>
        

    );
  }
  
  export default Home;