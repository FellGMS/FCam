// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CameraView from './components/CameraView';
import MediaSelector from './components/MediaSelector';

// Estilo do contêiner principal do aplicativo
const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Estilo para o botão
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

// Estilo para o contêiner da câmera e mídia
const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Aspect ratio 16:9 */
  background-color: black;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

function App() {
  // Estado para alternar entre a câmera ao vivo e a mídia armazenada
  const [useCamera, setUseCamera] = useState(true);
  const [media, setMedia] = useState(null);
  const videoRef = useRef(null);

  // Efeito para ativar a câmera ao iniciar
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

  // Função para gerenciar a seleção de mídia
  const handleMediaSelect = (selectedMedia) => {
    setMedia(selectedMedia);
    setUseCamera(false);
  };

  // Função para alternar entre a câmera e a mídia selecionada
  const handleToggleCamera = () => {
    setUseCamera(!useCamera);
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
            {media.type === 'image' && <img src={URL.createObjectURL(media.file)} alt="Mídia" />}
            {media.type === 'video' && <video controls autoPlay src={URL.createObjectURL(media.file)} />}
          </div>
        )}
      </MediaContainer>
      {!useCamera && <MediaSelector onMediaSelect={handleMediaSelect} />}
    </AppContainer>
  );
}

export default App;
