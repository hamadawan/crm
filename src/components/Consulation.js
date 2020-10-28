
function Consulation() {
  return (
    <div style={{margin:'0 auto',height:'500px', width:'95%',
        position:'relative', backgroundColor:'white'}}>
        <div style={{
                width:'55%', height:'80%', position:'relative', 
                left:'0', bottom:'0',
                backgroundColor:'gray'
            }}
        >
        </div>
        <div style={{
                width:'20%', position:'absolute',height:'60%', top:'0', right:'0',
                backgroundColor:'gray'
            }}
        >
        </div> 
        <div style={{
                width:'400px',height:'60%', position:'absolute', 
                top:'10%',right:'20%',
                display:'flex',
                flexDirection:'column',
                paddingTop:'50px',
               
            }}
        >
            <div style={{textAlign:'right',fontSize:'40px'}}>
                START WITH A FREE <br/>CONSULATION
            </div>
            <div style={{fontSize:'10px', textAlign:'justify',
                    paddingLeft:'80px', paddingRight:'10px'}}>
                Hypertext Markup Language is the standard markup language for 
                documents designed to be displayed in a web browser. It can be 
                assisted by technologies such as Cascading Style Sheets 
                and scripting languages such as JavaScript
            </div>
        </div>
    </div>
  );
}

export default Consulation;
