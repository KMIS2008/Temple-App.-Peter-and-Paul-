import React from 'react';
import ReactPlayer from 'react-player';
import churchHeader from '../../images/churcnHeader.jpg';

export const VideoPlayer=()=>{
    return(
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
        <ReactPlayer url="video.mp4" 
                     controls 
                     width="100%"
                     height="100%"
                     light={
                        <img src={churchHeader} 
                             alt='church'
                             style={
                                {
                                    width:'100%',
                                    height:'100%'

                                }
                             }
                     />}
                     />
      </div>
    )
}