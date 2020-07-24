# TODO APP

## Descricao 
Esta e' uma aplicacao que apresenta a lista das tarefas de um determinado utilizador

## Frameworks
Esta aplicacao foi desenvolvida em React Native a partir de um template typescript. Contem bibliotecas para controle de estados, persistencia local entre outros.
    
    * React Native
    * Typescript
    * Redux
    * Redux-Saga
    * Axios

## Estrutura da pasta
Todo o conteudo alteravel neste projecto encontra-se dentro da pasta src e o ficheiro raiz esta nomeiado como index.tsx. Todos os ficheiros que integram componentes ou conteudo de interface (Hypertexto) tem a extensao tsx e todos os arquivos de constantes e outras definicoes tem a extensao ts.

A pasta do src obedece a seguinte estrutura:

* src
    + components
        + elements    - pasta onde estao armazenados elementos reaproveitaveis como buttons, input, selects...
        + layout      - pasta onde estao armazenados componentes com header, footer, view, scrollbar, ...
        + screens     - pasta onde estao armazendados os principais screens ou paginas 
    + redux
        + actions     - armazenados todos os ficheiros de accoes para gestao de estados 
        + reducers    - onde estao armazenadados todos os ficheiros de manipulacao dos estados
        + sagas       - onde estao armazenados os ficheiros de middleware
        + store       - onde faz-se a integracao de todos os componentes acima
    _api.ts           - inicializacao do fetch para requests http
    App.tsx        - Principal App View

### Regras de criacao de ficheiros

para criar pastas devem ser seguidas as seguintes regras:

    * Alocar a pasta relacionada: por exemplo se for uma pagina deve estar na pasta screens e criar-se a respetiva pagina com inicial Maiuscula

Para criacao de ficheiros devem ser seguidas as seguintes regras:

    * para todos os componentes deve se seguir a seguinte nomenclatura __nome__.__tipo__.extensao 
      
      * Screen - Checkout*
        
        + Checkout
            - Checkout.component.tsx
            - Checkout.styles.ts
            - Checkout.interface.ts
      
      * Actions - Checkout *
            - Checkout.actions.types.ts
            - Checkout.actions.ts

      * Reducers - Checkout*
            - Checkout.reducers.ts
      * Sagas
            - Checkout.sagas.ts


## Como correr o projecto no ambiente de desenvolvimento

1. Instalar dependencias
Para uma melhor gestao de dependencias e' recomendavel que tenha instalado o yarn no seu ambiente de desenvolvimento contudo nao e' mandatorio, pode usar o npm

Na pasta onde tem o package.json corra o comando

> yarn install ou npm install

2. Correr o projecto
Se nunca tiver trabalhado antes com android, instale o android studio e um emulador, inicialize o emulador correndo os comandos:

Terminal 1: ADB devices 
> emulator @[nome_do_dispositivo]

Para listar os devices android corra o comando
> emulator -list-avds

Apos inicializar o dispositivo corra o comando para habilitar a porta 8081 no emulador
> adb reverse tcp:8081 tcp:8081 

Terminal 2:
> npm start

Terminal 3:
> npm run android