## Tecnologia Utilizada
![My Skills](https://skillicons.dev/icons?i=react)
![My Skills](https://skillicons.dev/icons?i=ts)

## Front-end Mobile da aplicação Pass.in
Projeto desenvolvido durante o NLW Unite, da Rocketseat. Aplicação Mobile para a aplicação Pass.in, que gerencia o check-in dos participantes dos eventos.

## Aprendizados 
Aplicação desenvolvida em React Native utilizando Typescript e a ferramenta Expo.

Principais aprendizados em relação ao uso do NativeWind para estilização, componentização de partes reutilizáveis do código, conexão com API e animações.

## Telas
### Home (/)
- Tela para o usuário informar o seu ingresso e acessar seu ticket. Caso não possua ingresso, é redirecionado para a tela de **Register**, pelo link "Ainda não possui ingresso?".

### Register (/register)
- Tela no qual o usuário informa um nome e email para criar seu registro. O registro é criado apenas se todos os campos estiverem preenchidos e o email não for igual a outro já
cadastrado no back-end. Caso o usuário já possua ingresso, é redirecionado para a tela **Home**, pelo link "Já possui ingresso?".

### Ticket (/ticket)
- Tela que é mostrada após o usuário realizar seu ingresso pela tela **Home** ou **Register**. O ticket do usuário é mostrado, com as informações de id, nome e email do participante. Além do nome do evento que está registrado e o QRCode do evento.

## Resultado
<img src="https://github.com/lucasBatistaa/nlw-unite-react-native/assets/86435351/6553188b-a8bd-40aa-83e5-2c0370588b7c" alt="screenshot" width="300" height="600">
<img src="https://github.com/lucasBatistaa/nlw-unite-react-native/assets/86435351/6b2f9a17-1a10-4ab2-9be0-d8e1a15b9890" alt="screenshot" width="300" height="600">
<img src="https://github.com/lucasBatistaa/nlw-unite-react-native/assets/86435351/7d120771-c056-4edf-8f91-25955069ad4e" alt="screenshot" width="300" height="600">

## Bibliotecas
- **Axios**, realizar as chamadas de requisições para a API
- **Moti**, animação de componentes de forma declarativa
- **Zustand**, gerenciamento de estados
- **async-storage**, persistência dos dados ao recarregar ou abrir novamente o aplicativo
- image-picker, acessa a UI do sistema para selecionar uma imagem do dispositivo
- qrcode-svg, geração de QRCode
