import Navbar from "./Navbar";

function Login() {
  return (
    <>
    <Navbar/>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <div>Booked with WIVO with before ? </div>
      <div style={{backgroundColor:'black',fontWeight:'bold'}}>Sign in</div>
    </div>
    </>

  );
}

export default Login;
