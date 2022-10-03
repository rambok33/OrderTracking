import React,{useState} from 'react';
import styles from '../style';

const Trackpanel = () => {
  
const value = {username};
const [formvalue, setform] = useState(value)
const handlechange = (e) => {
 console.log(e.target);
 const {name} =  e.target;
 setform({...formvalue,[name]: value})
}
const inputE = (event) => {
 
  setname(event.target.value)
}
const [name ,setname] =useState("");

const onsubmit = () =>{

  const finalstate = name; 
  console.log(finalstate);
}





 return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 m-6`}>
    <div>
    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[46px] text-white ss:leading-[100px] leading-[75px]'>Track with UserName</h1>
    
  
      <div className='flex justify-center items-center  bg-black-gradient    min-w-[140px] min-h-[140px] rounded-xl '> 
      <form className="  w-full max-w-sm">
          <div className="flex items-center border-b border-blue-500 py-2">
         <input  className="appearance-none bg-transparent border-none w-full text-blue-500 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="UserName" onChange={inputE} />
         <button className="flex-shrink-0 bg-black-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={onsubmit}>
      Search Order
         </button>
          <button className="flex-shrink-0 border-transparent border-4 text-white-500 hover:text-blue-500 text-sm py-1 px-2 rounded" type="button">
      Cancel
          </button>
         </div>
          </form>
          
         </div>
        
         </div>
    
        
       
    </section>
  )
 }

export default Trackpanel