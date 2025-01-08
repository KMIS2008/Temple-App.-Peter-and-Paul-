import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import church from '../../images/4.jpg';
import {Container, ContainerPlayer, Icon, IconSpan} from './VideoPlayer.styled';

export const VideoPlayer = () => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlayerVisible(true); // Включаем плеер при нажатии
  };

  return (
    <Container>
      {!isPlayerVisible ? (
        <ContainerPlayer
          onClick={handlePlayButtonClick}
          style={{
            backgroundImage: `url(${church})`,
          }}
        >
          <Icon>
            <IconSpan style={{ color: '#fff', fontSize: '24px' }}>▶</IconSpan> {/* Иконка Play */}
          </Icon>
        </ContainerPlayer>
      ) : (
        <ReactPlayer
          url="video.mp4"
          controls
          width="100%"
          height="100%"
        />
      )}
    </Container>
  );
};



// import React from 'react';
// import ReactPlayer from 'react-player';
// import church from '../../images/4.jpg';

// export const VideoPlayer=()=>{
//     return(
//         <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
//         <ReactPlayer url="video.mp4" 
//                      controls 
//                      width="100%"
//                      height="100%"
//                      light={
//                         <img src={church} 
//                              alt='church'
//                              style={
//                                 {
//                                     width:'100%',
//                                     height:'100%'

//                                 }
//                              }
//                      />}
//                      />
//       </div>
//     )
// }