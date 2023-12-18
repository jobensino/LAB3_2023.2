import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type TScreenParamNavigation = {
    Home: undefined;
    Details: { id: number };
    Form: { id: number }| undefined;
}

export type THomeStackParam = NativeStackScreenProps<TScreenParamNavigation, "Home">;
export type TDetailsStackParam = NativeStackScreenProps<TScreenParamNavigation, "Details">;
export type TFormStackParam = NativeStackScreenProps<TScreenParamNavigation, "Form">;
// export type THomeStackParam = NativeStackNavigationProp<TScreenParamNavigation,"Home2","homestack">;