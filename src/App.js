import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CameraView from './components/CameraView';
import MediaSelector from './components/MediaSelector';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: black;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

const ControlsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

function App() {
  const [useCamera, setUseCamera] = useState(true);
  const [media, setMedia] = useState(null);
  const videoRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  useEffect(() => {
    if (useCamera) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => {
          console.error("Erro ao acessar a câmera: ", err);
        });
    }
  }, [useCamera]);

  const handleMediaSelect = (selectedMedia) => {
    setMedia(selectedMedia);
    setUseCamera(false);
  };

  const handleToggleCamera = () => {
    setUseCamera(!useCamera);
  };

  const handleTakePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const img = canvas.toDataURL('image/png');
    setMedia({ file: img, type: 'image' });
    setUseCamera(false);
  };

  const handleStartRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    } else {
      const stream = videoRef.current.srcObject;
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        chunks.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: 'video/mp4' });
        const videoURL = URL.createObjectURL(blob);
        setMedia({ file: videoURL, type: 'video' });
        chunks.current = [];
        setUseCamera(false);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  return (
    <AppContainer>
      <h1>Simulador de Câmera com Mídia</h1>
      <Button onClick={handleToggleCamera}>
        {useCamera ? 'Mostrar Mídia' : 'Usar Câmera'}
      </Button>
      <MediaContainer>
        <video ref={videoRef} autoPlay muted style={{ display: useCamera ? 'block' : 'none' }}></video>
        {media && !useCamera && (
          <div className="media-overlay">
            {media.type === 'image' && <img src={media.file} alt="Mídia" />}
            {media.type === 'video' && <video controls autoPlay src={media.file} />}
          </div>
        )}
      </MediaContainer>
      {useCamera && (
        <ControlsContainer>
          <Button onClick={handleTakePhoto}>📸 Tirar Foto</Button>
          <Button onClick={handleStartRecording}>{isRecording ? '⏹️ Parar Gravação' : '🎥 Gravar Vídeo'}</Button>
        </ControlsContainer>
      )}
      {!useCamera && <MediaSelector onMediaSelect={handleMediaSelect} />}
    </AppContainer>
  );
}

export default App;
