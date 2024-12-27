import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import church from '../../images/4.jpg';

export const VideoPlayer = () => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlayerVisible(true); // Включаем плеер при нажатии
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
      {!isPlayerVisible ? (
        <div
          onClick={handlePlayButtonClick}
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%' /* Соотношение сторон 16:9 */,
            backgroundImage: `url(${church})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '20px',
            }}
          >
            <span style={{ color: '#fff', fontSize: '24px' }}>▶</span> {/* Иконка Play */}
          </div>
        </div>
      ) : (
        <ReactPlayer
          url="video.mp4"
          controls
          width="100%"
          height="100%"
        />
      )}
    </div>
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