import React, {useState} from 'react';
import NewsStory from './newsSubSection/newsStory.jsx';


const NewsSection = () =>{
  return(
    <div className="newsInnerContainer">
      <div className="newsTitle">
      News Section Title
      </div>
      <div className="newsStories">
        Map
        <NewsStory />
        <NewsStory />
        <NewsStory />
        <NewsStory />
        <NewsStory />
      </div>
    </div>
  )
}

export default NewsSection;