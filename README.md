# PDM
Programação para dispositivos móveis.

## Tutorial 01

Aplicativo de perfil pessoal desenvolvido com Expo e React Native. A tela apresenta nome, e-mail, foto e uma breve biografia em uma interface com tema azul escuro e detalhes neon.

### Tecnologias

- Expo SDK 54
- React Native 0.81
- React 19
- TypeScript

### Como executar

1. Acesse a pasta do tutorial:

	```bash
	cd tutorial01
	```

2. Instale as dependências:

	```bash
	npm install
	```

3. Inicie o servidor de desenvolvimento:

	```bash
	npm start
	```

Depois, abra o projeto no Expo Go usando o QR Code ou escolha uma das opções disponíveis no terminal. Também é possível executar diretamente com `npm run android`, `npm run ios` ou `npm run web`.

### Organização da tela

A implementação principal está em [`tutorial01/App.tsx`](tutorial01/App.tsx):

- `perfil`: concentra os dados exibidos na tela.
- `ScrollView`: permite visualizar todo o conteúdo em telas menores.
- `avatarFrame` e `avatar`: exibem a foto com moldura e brilho cyan.
- `infoBlock`: organiza os dados de contato em painéis destacados.
- `descriptionContainer`: apresenta a seção “Sobre mim”.
- `styles`: define espaçamentos, cores, tipografia, bordas e sombras.

### Identidade visual

O fundo `#050b1d` e o painel `#0a1530` criam a base azul escura. O cyan `#00e5ff` destaca informações e bordas, enquanto o verde neon `#00f5d4` marca elementos de status e títulos de seção. O contraste claro foi reservado para nome, e-mail e texto principal.
