import React ,{useState,useEffect} from 'react';
import './preloader.css';
import law from '../lotties/law.json'
import Lottie from 'lottie-react';
import App from '../App';
function Preloader() {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },2800)
    },[])
return (
      <div  className='preloader'>
        <div>
        {
            loading ?
            <Lottie className='loader' animationData={law}/>
            :
            //Rest Code
                <App/>
        }
        </div>  
      </div> 
  );
}
export default Preloader;