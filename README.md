# 📸 FCam

**FCam** é uma aplicação web desenvolvida com **React** e **Node.js** que simula o funcionamento de uma câmera, permitindo alternar entre o feed ao vivo da câmera do dispositivo e a exibição de uma imagem ou vídeo armazenado localmente. Este projeto é ideal para desenvolvedores que desejam praticar técnicas modernas de desenvolvimento web com foco em UX responsiva e estilização com **styled-components**.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para criar interfaces de usuário.
- **Node.js** - Ambiente de execução JavaScript server-side.
- **Styled-Components** - Biblioteca para estilização de componentes em React.

## 🎯 Funcionalidades

- **Simulação de Câmera**: Acesse a câmera do dispositivo e exiba o feed ao vivo.
- **Alternância de Mídia**: Carregue e exiba imagens ou vídeos armazenados no dispositivo, substituindo o feed ao vivo da câmera.
- **Interface Responsiva**: Design moderno e responsivo utilizando `styled-components`.


## 🔗 Link para Testar
Você pode testar a aplicação diretamente no seguinte link:

👉 **Teste a aplicação FCam** : [Veja Funcionando] (https://fcam.vercel.app)


## 📂 Estrutura do Projeto

```
projeto-camera-midia/
│
├── client/                         # Diretório principal do projeto React
│   ├── public/                     # Arquivos públicos acessíveis
│   │   ├── index.html              # Arquivo HTML principal
│   │   └── ...                     # Outros arquivos públicos
│   │
│   ├── src/                        # Diretório onde fica o código fonte do projeto
│   │   ├── components/             # Diretório para componentes React
│   │   │   ├── CameraView.js       # Componente para visualização da câmera
│   │   │   └── MediaSelector.js    # Componente para seleção de mídia (imagem/vídeo)
│   │   │
│   │   ├── styles/                 # Diretório para arquivos de estilo CSS
│   │   │   └── styles.css          # Arquivo de estilos globais
│   │   │
│   │   ├── App.js                  # Componente principal do aplicativo
│   │   ├── index.js                # Ponto de entrada da aplicação React
│   │   └── ...                     # Outros arquivos padrão do React
│   │
│   ├── package.json                # Arquivo de configuração do npm
│   ├── package-lock.json           # Arquivo de controle de versões de pacotes
│   └── README.md                   # Documentação do projeto
│
└── .gitignore                      # Arquivo que especifica quais arquivos não serão versionados no Git
```

## 🛠️ Configuração e Execução do Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** e **npm** instalados em sua máquina.

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/FellGMS/FCam.git
   cd FCam/client
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm start
   ```

4. **Abra o navegador e acesse:**

   ```
   http://localhost:3000
   ```

   Agora você pode testar a simulação da câmera e alternar entre o feed ao vivo e a mídia armazenada!

## 🧩 Componentes

- **CameraView.js**: Responsável por acessar a câmera do dispositivo e exibir o feed ao vivo.
- **MediaSelector.js**: Permite que o usuário selecione uma imagem ou vídeo do dispositivo para exibição.
- **App.js**: Componente principal que gerencia o estado e a interação entre a câmera e a mídia.

---

## 📝 Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo `LICENSE` para obter mais informações.

---

## ✍️ Autor

Feito com ❤️ por **Fellipe Goulart Gomes**.

- 🌐 GitHub: [FellGMS](https://github.com/FellGMS)
- 💼 LinkedIn: [Fellipe Goulart Gomes](https://www.linkedin.com/in/fellipeggomes)
- ✉️ E-mail: [fellipegoulartgomes@gmail.com](mailto:fellipegoulartgomes@gmail.com)

---