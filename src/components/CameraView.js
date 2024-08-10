// src/components/CameraView.js
import React, { useRef, useEffect } from 'react';

const CameraView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Erro ao acessar a câmera: ", err);
      });
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scaleX(-1)', // Espelha a câmera para parecer um espelho
      }}
    ></video>
  );
};

export default CameraView;
