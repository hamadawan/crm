import Grid from '@material-ui/core/Grid';
import { ReactComponent as Instagram } from '../images/instagram2.svg'

function Footer() {
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <div style={{fontSize:'30px', paddingTop:'50px', fontWeight:'bold'}}>
          WIVO
        </div>
        <div style={{display:'flex',flexDirection:'row', width:'100%',
         justifyContent:'space-between', padding:'50px'}}>
          <div style={{fontWeight:'bold'}}>
            <div>SIGN UP AND JOIN</div>
            <div  style={{display:'flex',flexDirection:'row', 
            justifyContent:'space-between', paddingTop:'20px'}}> 
              <div>EMAIL</div>  
              <div>SUBSCRIBE</div>       
            </div>
          </div>
          <div  style={{fontWeight:'bold'}}>
            <div>ABOUT</div>
            <div>sERVICE</div>
            <div>LEGAL</div>
            <div>PRESS</div>
          </div>
        </div>
        <div style={{display:'flex', flexDirection:'row', 
              justifyContent:'center', paddingBottom:'50px'
        }}>
          <Instagram/>
          <Instagram/>
          <Instagram/>
          <Instagram/>
          <Instagram/>
        </div>
    </div>
  );
}

export default Footer;
