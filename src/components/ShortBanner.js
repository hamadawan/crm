

function ShortBanner() {
  return (
    <div style={{
            display:'flex', flexDirection:'row', justifyContent:'space-around',
            position:'absolute',
            right:"0px",
            top:"350px",
            backgroundColor:'white',
            width:'90%',
            height:'100px',
            boxShadow:'5px 10px 18px #888888'

         }}
    >
        <div>Brand Logo</div>
        <div>Brand Logo</div>
        <div>Brand Logo</div>
    </div>
  );
}

export default ShortBanner;
