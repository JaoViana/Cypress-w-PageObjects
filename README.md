# Cypress-w-PageObjects

--> Estudo utilizando o PageObjects
- O PO é uma ferramenta utilizada para salvar linhas codigo
- Nesse estudo utilizei uma aplicação de um Trello fake para testar
- Para iniciar a aplicação, siga os passos:
1. Clone a aplicação
2. Instale com o comando npm install
3. Abra pelo comando npm open
4. Pronto, o a aplicação estará funcionando na seu PC
- Para mais consultas: https://www.youtube.com/watch?v=Sd-i_VJiLqQ

--> Organizando suas pastas
- Primeiro de tudo é importante dizer que um projeto bem organizado é um projeto limpo ou seja, cada parte deve ser montada para que em uma futura consulta não ocorra duvidas.
Vamos então começar com a organização:
1. Dentro da pasta "Suport" crie uma subpasta de nome que você queira; no meu caso escolhi "pageObjects" pois estou demonstrando um estudo do mesmo.
2. Dentro da pasta crie um arquivo .js ou .ts de nome que seja direto. Lembrando: Nunca os nomes devem ser referentes as funções que estamos automatizando e nesse caso usei o nome de login.ts
3. Agora, dentro da pasta "integration" crise seu primeiro programa de nome que seja condizente com a sua ação. 
Pronto, com esses passos podemos iniciar nossa aplicação.

Um ponto importante é dizer como iremos fazer a chamada da pasta de pageObjects para o arquivo referente de automação.
- support > pageObjects > login.ts, temos:
export class Login{} 

e dentro dessa classe iremos criar nossos pageObjects.

- Já dentro da pasta "integration", usamos o seguinte comando para fazer a importação:

import { Login } from '../support/pageObjects/login';
const login = new Login

De maneira rápida, podemos dizer que estamos importando a classe "login" da pasta citada.
o comando "const login = new Login" é para completar a importação. 


