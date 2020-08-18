import React, { useEffect,useState } from 'react';
import NewsSection from './leftSection/newsSection.jsx';
import MiddleSection from './middleSection/middleSection.jsx';
import MiniModulesSection from './rightSection/miniModulesSection.jsx';
import Axios from 'axios';

const Main = () => {
const [newsObject,setNewsObject] = useState(null);

useEffect(()=>{
// Axios.get('/news')
// .then((resp)=>{
//   setNewsObject(resp)
// })
},[])
  return (
    <div className="mainContainer">
      <div className="newsContainer">
        <NewsSection news={newsObject}/>
      </div>
      <div className="middleContainer">
        <MiddleSection />
      </div>
      <div className="miniModulesContainer">
        <MiniModulesSection />
      </div>
    </div>
  )
}


export default Main;