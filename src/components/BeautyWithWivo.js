import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'

function BeautyWithWivo() {
  return (
    <div style={{display:'flex',flexDirection:'column', width:'100%',alignItems:'center'}}>
        <div style={{fontSize:'30px', paddingTop:'50px',fontWeight:'bold'}}>#BEAUTIWITHWIVO</div>
        <div style={{display:'flex',width:'100%', flexDirection:'row'}}>
        <Grid container>
          <Grid container item xs={12} style={{padding:'50px'}}>
            <Grid item xs={12} sm={6} md={3} style={{ border:'1px #000 solid'}}>
              <Card style={{backgroundColor:'black',width: '100%', height:'140px'}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{backgroundColor:'gray', border:'1px gray solid'}}>
              <Card style={{backgroundColor:'black',width: '100%', height:'140px'}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{backgroundColor:'gray', border:'1px gray solid'}}>
              <Card style={{backgroundColor:'black',width:'100%', height:'140px'}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{backgroundColor:'gray', border:'1px gray solid'}}>
              <Card style={{backgroundColor:'black',width: '100%', height:'140px'}}/>
            </Grid>
          </Grid>
        </Grid> 
        </div>
    </div>
  );
}

export default BeautyWithWivo;
