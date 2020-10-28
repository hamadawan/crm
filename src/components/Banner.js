import '../App.css';

import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Instagram } from '../images/instagram.svg'
import {
    Link,
  } from "react-router-dom";
function Banner() {
  return (
    <div>
        <div className="banner-inner">
            <div className="banner-text">
                <div style={{fontSize:'20px'}}>Beauty</div>
                <div style={{fontSize:'60px'}}>Right to you</div>
                <div style={{fontSize:'10px', width:'90%',  letterSpacing:'5px'}}>IN HOME AESTHETIC SERVICES</div>
                <di style={{
                        backgroundColor:'white',width:'50%',
                        textAlign:'center', color:'black',
                        fontWeight:'bold',
                        marginTop:'5px',
                        padding:'10px',
                    }}
                ><Link style={{textDecoration:'none', color:'black'}}to="/login">Book Now</Link></di>
            </div>
            <div 
                style={{
                    backgroundColor:'#1b1b1b', display: 'flex', flexDirection:'column',
                    justifyContent:'space-evenly',
                    paddingTop:'25px', paddingBottom:'25px'
                }}
            >
                <Facebook />
                <Twitter />
                <Instagram />
            </div>
        </div>
    </div>
  );
}

export default Banner;
