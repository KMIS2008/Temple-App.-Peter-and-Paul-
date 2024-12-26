import React from 'react';
import ReactPlayer from 'react-player';

export const VideoPlayer=()=>{
    return(
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
        <ReactPlayer url="video.mp4" 
                     controls 
                     width="100%"
                     height="100%"
                     />
      </div>
    )
}