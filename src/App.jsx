import { createContext, useEffect, useState } from 'react';
import InputField from './Components/InputField'
import axios from 'axios';
import Body from './Components/Body';
export const weatherData=createContext()

const App = () => {

  let previousPlace=localStorage.getItem("pre")

     const [place, setplace] = useState(previousPlace);
    
     const [wdata, setwdata] = useState([]);
 

  useEffect(() => {

      let url=`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=865e1025ed48b92c47cde4ce79658ba1&units=metric`;
    
    let FetchData=async()=>{
      try{

    let rep= await axios.get(url)

     setwdata(rep);

      }catch(err){
        alert(` you might have entered a wrong Place Name.  ${err} `);

        return
      }
    }
    FetchData();

  }, [place])
  



  return (

    <weatherData.Provider value={wdata}>    
      
      <div className='w-full  overflow-scroll    h-screen bg-center  img' >
    <div className=' relative z-1'>

<InputField  onChange={setplace}   />
<Body   />

    </div>
    </div>
    </weatherData.Provider>



  )
}

export default App