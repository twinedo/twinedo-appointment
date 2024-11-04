
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NavParam = {
    Login: undefined;
    Home: undefined;
    SplashScreen: undefined;
};


export type MainStackScreenProps<T extends keyof NavParam> =
NativeStackScreenProps<NavParam, T>;

export type BottomTabParam = {}