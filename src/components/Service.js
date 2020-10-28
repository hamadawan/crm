import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Service() {
  return (
    <div style={{
            display:'flex',flexDirection:'column',
            padding:'0px 50px 50px 50px',
        }}
    >
        <div  style={{display:'flex',flexDirection:'column', 
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'white',
                paddingTop:'100px'
        }}
        >
            <div  style={{fontSize:'30px', textAlign:'center', }}>
                IN-HOME AESTHETIC &#38; BEAUTIFUL SERVICE <br/>
                BY THE TOP PERFESSIONALS.
            </div>
            <div style={{fontSize:'25px',paddingTop:'50px',fontWeight:'bold'}}>START NOW</div>
            <div style={{fontSize:'12px',paddingBottom:'20px'}}>MOST POPULAR</div>
        </div>     
        <div style={{paddingLeft:'20px',paddingBottom:'50px', flexGrow:'1',backgroundColor:'white'}}>
            <Grid container spacing={1} >
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Paper style={{height:'300px',textAlign:'center', 
                            width:'100%',
                            backgroundColor:'black'
                        }}>
                            item
                        </Paper>
                        <div style={{textAlign:'center', paddingTop:'30px'}}>Service 1</div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Paper style={{height:'400px',textAlign:'center', 
                            width:'100%',
                
                            backgroundColor:'black'
                        }}>
                            item
                        </Paper>
                        <div style={{textAlign:'center', paddingTop:'30px'}}>Service 2</div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} display='flex' flexDirection='column' alignItems='center'>
                        <Paper style={{height:'300px',textAlign:'center', 
                            width:'100%',
                            backgroundColor:'black'
                        }}>
                            item
                        </Paper>
                        <div style={{textAlign:'center', paddingTop:'30px'}}>Service 3</div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}

export default Service;
