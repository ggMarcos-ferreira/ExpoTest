// src/routes/types.ts
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

// Defina suas rotas
export type RootStackParamList = {
  Login: undefined; // Aqui você pode definir os parâmetros se houver
  BottomRoutes: NavigatorScreenParams<BottomTabParamList>; // Definição da navegação por abas
};

export type BottomTabParamList = {
  List: undefined;
  User: undefined;
};

export type AuthNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<BottomTabParamList>
>;
