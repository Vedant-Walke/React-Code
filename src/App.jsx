//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 function App(){
  var dt = new Date().toLocaleDateString();
  var tm = new Date().toLocaleTimeString();

  var heading = {
    color: 'blue',
    textDecoration: 'underline',
    textAlign: 'center'
    
  }
var cssStyle = {}

  if(dt > 6 && dt < 12)
    {
      console.log("Good Morning");
      cssStyle.color = "orange";
  }
  else if(dt>=12 && dt<= 18)
  {
    console.log("Good Afternoon");
    cssStyle.color = "lightblue";
  }
  else if(dt>=18 && dt<= 24)
  {
    console.log("Good eveing");
    cssStyle.color = "brown";
  }
  else{
    console.log("good night");
    cssStyle.color = "black";
  }

  
  return(
    <>
      <h1 className="date" style={heading}>Todays Date: {dt}</h1>
      <h1 className="time">Current Time: {tm}</h1>
      <h1 style={cssStyle} >Good {dt > 6 && dt < 12 ? "Morning" : dt >= 12 && dt <=  18 ? "Afternoon" : "night "}</h1>

      <button className='btn btn-success'>click here</button>
    </>
  )
 }

 export default App;
 
 