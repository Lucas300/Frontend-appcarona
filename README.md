# 🚗 Carona Legal

O **Carona Legal** é um aplicativo fullstack desenvolvido para gerenciar **corridas entre usuários e motoristas** de forma eficiente. O sistema oferece uma experiência intuitiva, moderna e responsiva, facilitando o compartilhamento de caronas urbanas.

## 📄 Modelagem da Aplicação

### 🧩 Entidades/Models Criadas:

- **Usuário (`tb_usuario`)**
  - `id`, `nome`, `email`, `telefone`

- **Motorista (`tb_motorista`)**
  - `id`, `nome`, `tipoVeiculo`

- **Corrida (`tb_corrida`)**
  - `id`, `distancia`, `velocidade`, `tempoCorrida`, `partida`, `destino`
  - Chaves estrangeiras: `id_usuario`, `id_motorista`

## ✨ Funcionalidades Principais (CRUD)

- `formatarTempo()` – Método utilitário para converter segundos em formato hh:mm:ss  
- `findAll()` – Lista todos os registros  
- `findById()` – Busca por ID  
- `findAllByNome()` – Busca por nome  
- `post()` – Criação de novos registros  
- `put()` – Atualização de dados existentes  
- `delete()` – Exclusão de registros  

## 👨‍💻 Tecnologias Utilizadas

### 🛠️ Backend
- Java 17+
- Spring Boot (Web, DevTools, Data JPA)
- MySQL Driver

### 🌐 Frontend
- React
- TypeScript
- JavaScript
- Axios
- Tailwind CSS
- HTML, CSS
- React Router DOM
- React Loader Spinner
- Reactjs Popup
- Phosphor Icon
- HeroIcons

Feito com ❤️ por: 
- Lucas(EU)
- [Guilherme](https://github.com/GuilhermeKaludin)
- [João](https://github.com/jloliveira95)
- [Juliana](https://github.com/JulianaMonteiro4)
- [Tainá](https://github.com/tainalara)

