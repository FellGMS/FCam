// src/components/MediaSelector.js
import React from 'react';

const MediaSelector = ({ onMediaSelect }) => {
  // Função para lidar com a seleção de arquivos
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type.startsWith('video') ? 'video' : 'image';
      onMediaSelect({ file, type });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
    </div>
  );
};

export default MediaSelector;
