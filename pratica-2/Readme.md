# Prática-2: persistência de dados

## Orientações da prática

Nesta prática de desenvolvimento de software será aplicado técnicas e padrões para gerência de estado e persistência de dados com ReactJS+Typescript.  Esta prática deve observar as seguintes orientações:   

A partir do repositório https://github.com/jobensino/LAB3_2023.2, deve-se copiar a pasta pratica-2. Esta pasta disponibiliza a estrutura do monorepo contendo as ramificações para criação de bibliotecas e aplicativos. Além disso, a aplicação desenvolvida em aula para demonstração de gerenciamento de estados e persistência de dados está disponível na pasta tutorial-3, dentro da ramificação "app" do monorepo.

Para realização da prática-2, o docente assume o papel gestor de bibliotecas. O trabalho desse do gestor de bibliotecas será prover possíveis alterações nas bibliotecas do monorepo. De inicio, no repositório disponibiliza duas bibliotecas: libjr e libdb. A biblioteca libjr contém componentes de UI enquanto que a libdb disponibiliza o hook para acessar serviços de banco de dados.

Os estudantes deverão desenvolver, individualmente, um aplicativo de cadastro simples. São critérios a serem seguidos no desenvolvimento do aplicativo:
- Este aplicativo deve possuir interface (botão ou menu) que permita acesso a tela de cadastro. 
- O cadastro é de livre escolha, mas é necessário possuir um mínimo de três atributos (id,nome,data_cadastro). Por exemplo, pode-se escolher cadastro de: estudantes da turma, disciplinas, produtos,carros, jogos, times,aniversariantes, etc.
- O aplicativo deve consumir as bibliotecas (UI e persistência) do monorepo.
- Cada aplicativo deve ser criado em uma pasta da ramificação "app". No campo "autor" do arquivo "package.json" de cada aplicação deve constar o nome do estudante criador do aplicativo.
- Deve-se criar um arquivo Readme.md na pasta base do aplicativo com informações do que faz o aplicativo. 
- Todo código gerado nessa prática deve ser disponibilizado no repositório github-LAB3_2023.2.

O desenvolvimento de componentes deve cumprir, no mínimo, os seguintes requisitos:
Os estilos CSS de todos componentes devem ser implementados em CSS-in-JS. Aqui pode-se utilizar styled-components ou outro módulo que implemente CSS-in-JS.
Todos os componentes devem possuir propriedades de customização de aparência, em especial, cor de texto e cor de plano de fundo.
As propriedades dos componentes devem ser definidas com recursos Typescript: interface, type, etc.

## Configuração

Após baixar a pasta prática-2 do repositório github são necessários os seguintes passos para executar o aplicativo "tutorial-3", e posteriormente, o aplicativo desenvolvido por cada estudante:

1. A partir da pasta "pratica-2", executar o comando:
```
yarn
```
Este comando irá instalar as depedencias de módulos criando a pasta "node_modules" do monorepo.

2. A partir da pasta "pratica-2/pkg/libjr", executar o comando:
```
yarn build
```
Este comando irá "transpilar" o código da biblioteca, tornando disponivel na pasta "dist" para que as aplicações possam consumir suas funcionalidades. 

3. A partir da pasta "pratica-2/pkg/libdb", executar o comando:
```
yarn build
```
Este comando irá "transpilar" o código da biblioteca, tornando disponivel na pasta "dist" para que as aplicações possam consumir suas funcionalidades. 

4. A partir da pasta "pratica-2/app/tutorial-3", executar o comando:
```
yarn build
```
Este comando irá "transpilar" o código da aplicação, tornando disponivel na pasta "dist". 

5. Para execução em desenvolvimento,a partir da pasta "pratica-2/app/tutorial-3", deve-se executar o comando :
 ```
yarn dev
```
Este comando inicia execução do aplicativo "tutorial-3".