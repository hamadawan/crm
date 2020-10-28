import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Instagram2 } from '../images/instagram2.svg'

function WhatsNew() {
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <div style={{fontSize:'30px', paddingTop:'50px',fontWeight:'bold'}}>WHAT'S NEW</div>
        <div>
        <Grid container spacing={1} >
                <Grid container item xs={12} spacing={5} style={{padding:'50px'}}>
                    <Grid item xs={12} sm={6} md={4} >
                      <Card style={{maxWidth: '345'}}>
                        <CardActionArea>
                          <CardMedia
                            style={{height: 140}}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Card style={{maxWidth: '345'}}>
                        <CardActionArea>
                          <CardMedia
                            style={{height: 140}}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Card style={{maxWidth: '345'}}>
                        <CardActionArea>
                          <CardMedia
                            style={{height: 140}}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                </Grid>
            </Grid>
       
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Instagram2 style={{color:'gray'}}/>
          <div style={{fontSize:'10px',textAlign:'center'}}>FOLLOW US <br/>ON INSTAGRAM</div>
        </div>
    </div>
  );
}

export default WhatsNew;
