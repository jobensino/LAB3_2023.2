# Navegação React Native: aula prática

## Configuração inicial de projeto

1. Clonar pasta "expo-ts" do repositório [https://github.com/jobensino/LAB3_2023.2].
2. Renomear a pasta clonada "expo-ts" para um nome de projeto personalizado, por exemplo: "aula-nav1".
3. Modificar os conteúdos dos parametros "name" e "slug" do arquivo "app.json", e "name" do arquivo "package.json", para o nome de projeto personalizado. 
4. A partir da pasta base "aula-nav", executar "yarn" para instalação de módulos. Concluida instalação, executar "yarn start --web" para verificar operacionalidade do projeto.
5. Instalar dependencias para projetos Expo, executando:
    ```
    yarn add react-native-screens react-native-safe-area-context
    ```

## Configuração React Navigation

Para instalar a biblioteca React Navigation, executar: 

```
yarn add @react-navigation/native@next
```
 * Maiores detalhes em [https://reactnavigation.org/docs/7.x/getting-started])

Para instalar os diferentes tipos de navegadores, executar cada um dos seguintes:

```
yarn add @react-navigation/native-stack@next
```
* Maiores detalhes em: [https://reactnavigation.org/docs/7.x/hello-react-navigation]

```
yarn add @react-navigation/bottom-tabs@next
```
Maiores detalhes em: [https://reactnavigation.org/docs/7.x/tab-based-navigation]

```
yarn add @react-navigation/drawer@next react-native-gesture-handler react-native-reanimated
```
* Maiores detalhes em: [https://reactnavigation.org/docs/7.x/drawer-based-navigation]
* Lembrar de adicionar na primeira linha do arquivo "App.tsx", o código:

    ```js
    import 'react-native-gesture-handler';
    ```

## Combinando Stack,Tab e Drawer

Inicialmente deve-se modificar conteúdo do arquivo "App.tsx" para: 

```js
import "react-native-gesture-handler"; 

import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  
  return (
    <NavigationContainer>
      {/*Código para navegação ficará aqui */}
    </NavigationContainer>
  )
}

export default registerRootComponent(App);
```

### Configurando telas

Na pasta "src", criar uma pasta "screens", e nessa pasta criar os componentes React: Home, Sobre e Contatos:
```
src -> screens
       -- home.tsx
       -- about.tsx
       -- contact.tsx
       -- styles.ts
```

O arquivo "styles.ts" com estilos css simples para serem utilizados nos componentes.

Por exemplo, o conteúdo do arquivo "home.tsx": 

```js
import React from 'react';
import { Container, Title } from './styles';

const Home: React.FC = () => {

    return (
      <Container>
          <Title>Home</Title>
      </Container>
    );
};

export {Home}
```

Os demais arquivos seguem o mesmo padrão de conteúdo, modificando apenas o nome do componente.

### Configurando navegação "Stack" e "Tab"

Na pasta "src", criar uma pasta "navigation", e nessa pasta criar os componentes React: 
```
src -> navigation
       -- stacknavigator.tsx
       -- tabnavigator.tsx
```

```js
// conteúdo do arquivo stacknavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home,About,Contact } from '../screens';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#BB3508",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainStackNavigator = () => {
  
  return (
      <Stack.Navigator screenOptions={screenOptionStyle} >
        <Stack.Screen name="home" component={Home} options={{title:"Home"}} />
        <Stack.Screen name="about" component={About} options={{title:"Sobre"}} />
      </Stack.Navigator>
  )
}
  
const ContactStackNavigator = () => {
  
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
          <Stack.Screen name="contact" component={Contact} options={{title:"Contatos"}} />
        </Stack.Navigator>
    )
  }

export {MainStackNavigator,ContactStackNavigator}
```

```js
// conteúdo do arquivo tabnavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootParamList } from './types';
import { MainStack,ContactStack } from './stacknavigator';

const Tab = createBottomTabNavigator<RootParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="hometab"
        component={MainStack}
        options={{ headerShown: false,title:"Home"}}
      />
      <Tab.Screen
        name="contactab"
        component={ContactStack}
        options={{ headerShown: false,title:"Contatos"}}
      />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};
```

Aqui pode-se modificar o arquivo "App.tsx" para:

```js
import "react-native-gesture-handler"; 

import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from "./navigation";

const App = () => {
  
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default registerRootComponent(App);
```

Executando "yarn start" é possivel visualizar a navegação "tab" e "stack" atuando.

### Configurando navegação "Stack" e "Tab"


Na pasta "src/navigation", adicionar o componente React: 
```
src -> navigation
       -- stacknavigator.tsx
       -- tabnavigator.tsx
       -- drawernavigator.tsx
```

```js
// conteúdo do arquivo drawernavigator.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabNavigator } from "./tabnavigator";
import { ContactStackNavigator } from './stacknavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={BottomTabNavigator} options={{title:"Home"}} />
        <Drawer.Screen name="contact" component={ContactStackNavigator} options={{title:"Contatos"}} />
      </Drawer.Navigator>
  )
}

export {DrawerNavigator}
```

Lembrar de modificar o conteúdo do arquivo "babel.config.js":

```js
// conteúdo do arquivo babel.config.js.tsx
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

# Referências

1. Getting started.[https://reactnavigation.org/docs/7.x/getting-started]
2. Hello React Navigation. [https://reactnavigation.org/docs/7.x/hello-react-navigation]
3. Combining Drawer, Tab and Stack navigators in React Navigation 6.[https://dev.to/deversity/combining-drawer-tab-and-stack-navigators-in-react-navigation-6-l4m]
4. Combining Stack, Tab & Drawer Navigations in React Native With React Navigation 5.[https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da]
