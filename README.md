# Gerenciador de Produtos

Protótipo de uma tela para gerenciar produtos em estoque. Na tela o usuário pode:

- Adicionar um produto através de um formulário;
- Navegar pelos produtos já adicionados, ordenando-os por id, nome, quantidade unitária, quantidade em estoque ou valor total;
- Pesquisar um ou mais produtos pelo nome;
- Aumentar ou diminuir a quantidade em estoque de um produto;
- Deletar produtos;
  
## Stack

- TypeScript
- React Native
- Styled Components
- Expo

## Como rodar

1. Clone o projeto para a sua máquina e entre na pasta:

```
  git clone https://github.com/liaporto/gerenciador-produtos.git
```
```
  cd gerenciador-produtos
```

2. Rode `yarn install` para instalar todas as dependências do projeto.

3. Instale a Expo CLI rodando `yarn add expo-cli`.

4. Rode `expo start` para iniciar as Developer Tools do Expo em [http://localhost:19002](http://localhost:19002).

### Abrindo na web

5. Aperte `w` dentro do terminal ou selecione "Run in web browser" a partir das Developer Tools no navegador. O aplicativo fica disponível em [http://localhost:19006](http://localhost:19006).

### Abrindo em um emulador Android

5. Para abrir em um emulador Android, primeiro garanta que o emulador está ativo e então aperte `a` dentro do terminal ou selecione "Run on Android device/emulator" a partir das Developer Tools no navegador.

### Abrindo no telefone

5. Instale o aplicativo Expo Go ([iOS](https://apps.apple.com/br/app/expo-go/id982107779) e [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)).

6. Aponte a câmera do telefone para o QR Code que aparece tanto no terminal quanto nas Developer Tools ([http://localhost:19002](http://localhost:19002)) e siga as instruções no telefone.
