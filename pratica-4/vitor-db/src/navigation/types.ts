import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TScreenParamNavigation = {
    home: undefined;
    register: undefined;
    update: undefined;
    show: undefined;
    showall: undefined;
    delete: undefined;
}

export type THomeStackParam = NativeStackNavigationProp<TScreenParamNavigation,"home","homestack">;