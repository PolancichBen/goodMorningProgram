import React, {useState} from 'react';
import NewsStory from './newsSubSection/newsStory.jsx';


const NewsSection = () =>{
  return(
    <div>
      <div>
      News Section Title
      </div>
      <div>
        Map
        <NewsStory />
      </div>
    </div>
  )
}

export default NewsSection;