# Aplicativo de Cadastro de Despesas Pessoais

Este aplicativo foi desenvolvido como parte do projeto individual para a disciplina Laboratório de Programação III [OBR.0299].

O objetivo do aplicativo é permitir que os usuários registrem suas despesas pessoais para um melhor controle financeiro. Os usuários podem adicionar informações sobre cada despesa, ajudando a entender como o dinheiro está sendo gasto ao longo do tempo.


## Funcionalidades Principais

1. **Cadastro de Despesas:** Permite ao usuário adicionar novas despesas, incluindo uma descrição, valor e data da despesa.

5. **Visualização de Despesas:** Veja a lista de despesas cadastradas, incluindo detalhes como valor total gasto.

6. **Controle Financeiro:** Acompanhe suas despesas ao longo do tempo para tomar decisões informadas sobre seu orçamento.

## Pré-requisitos

Antes de executar o aplicativo, certifique-se de ter instalado:

- NodeJS
- Yarn

## Como Executar

1. Clone este repositório:
```
git clone https://github.com/jobensino/LAB3_2023.2.git
```

2. A partir da pasta "pratica-2", e execute o seguinte comando:
```
yarn
```
*Este comando irá instalar as depedencias de módulos criando a pasta "node_modules" do monorepo.*

3. A partir da pasta "pratica-2/pkg/libjr", executar o comando:
```
yarn build
```
*Este comando irá "transpilar" o código da biblioteca, tornando disponivel na pasta "dist" para que as aplicações possam consumir suas funcionalidades.*

4. A partir da pasta "pratica-2/pkg/libdb", executar o comando:
```
yarn build
```
*Este comando irá "transpilar" o código da biblioteca, tornando disponivel na pasta "dist" para que as aplicações possam consumir suas funcionalidades.* 

4. A partir da pasta "pratica-2/app/cadastro-despesas", executar o comando:
```
yarn build
```
*Este comando irá "transpilar" o código da aplicação, tornando disponivel na pasta "dist".* 

5. Para execução em desenvolvimento,a partir da pasta "pratica-2/app/cadastro-despesas", deve-se executar o comando :
 ```
yarn dev
```
*Este comando inicia execução do aplicativo "cadastro-despesas".*

## Autor

- [Leonardo Airam Muniz Cruz](https://github.com/airamcruz/)

## Contribuição

Contribuições são bem-vindas! 

Se você encontrar problemas, bugs ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request para o repositório.

Contribuições são bem-vindas!