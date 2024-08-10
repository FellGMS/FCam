// src/components/CameraView.js
import React, { useRef, useEffect } from 'react';

const CameraView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Solicita permissão para acessar a câmera e exibe o vídeo ao vivo
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Erro ao acessar a câmera: ", err);
      });
  }, []);

  return (
    <video ref={videoRef} autoPlay muted style={{ width: '100%' }}></video>
  );
};

export default CameraView;
