import {
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {TWStyles} from 'twrn-styles';
import {Button, Card, Input} from 'twrn-components';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {styles} from './login.styles';
import { TWColors } from '@/styles/colors';
import authStore from '@/stores/auth';
import { shallow } from 'zustand/shallow';

const Login = () => {
  const login = authStore(state => state.login);

  const [isRememberLogin, setIsRememberLogin] = useState(false);

  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const schema = useMemo(() => {
    return yup.object().shape({
      username: yup.string().required('Required'),
      password: yup.string().required('Required'),
    });
  }, []);

  const {
    control: control,
    handleSubmit: handleSubmit,
    formState: {isValid, errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '', //user
      password: '', //password
    },
  });

  const onSubmit = async (data: {username: string; password: string}) => {
    login?.(data);
  };

  return (
    <View
      style={[
        TWStyles.displayFlex,
        TWStyles.alignCenter,
        {backgroundColor: TWColors.WHITEF7},
      ]}>
      <StatusBar barStyle="light-content" backgroundColor={TWColors.PRIMARY} />
      <View style={[TWStyles.absolute, TWStyles.w100, styles.viewAbsolute1]} />
      <View>
        <Image
          source={require('@/assets/logo.webp')}
          style={styles.icSplash}
          resizeMode="contain"
        />
        <Text style={[TWStyles.textAlignCenter, styles.txtLoginTo]}>
          Login to {'\n'}your Account
        </Text>
      </View>
      <View style={[TWStyles.w100, styles.containerForm]}>
        <Card containerStyle={styles.cardForm}>
          <View>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  placeholder="John.doe@gmail.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  containerStyle={{
                    borderColor: TWColors.GREYEDF,
                    borderRadius: 16,
                  }}
                  errors={[errors.username?.message ?? '', 'right']}
                />
              )}
              name="username"
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  placeholder="********"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={isPasswordHide}
                  containerStyle={{
                    borderColor: TWColors.GREYEDF,
                    borderRadius: 16,
                  }}
                  postfix={
                    <Feather
                      name={isPasswordHide ? 'eye' : 'eye-off'}
                      size={24}
                      color={TWColors.GREYACB}
                      onPress={() => setIsPasswordHide(!isPasswordHide)}
                    />
                  }
                  errors={[errors.password?.message ?? '', 'right']}
                />
              )}
              name="password"
            />
          </View>
          <View
            style={[
              TWStyles.row,
              TWStyles.alignCenter,
              TWStyles.justifySpaceBetween,
            ]}>
            <Pressable
              style={[TWStyles.row, TWStyles.alignCenter, TWStyles.columnGap8]}>
              <Ionicons
                name={isRememberLogin ? 'square-outline' : 'checkbox-outline'}
                size={24}
                color={TWColors.GREY6C7}
                onPress={() => setIsRememberLogin(!isRememberLogin)}
              />
              <Text style={{color: TWColors.GREY6C7}}>Remember me</Text>
            </Pressable>
            <View>
              <Text style={{color: TWColors.BLUE4D8}}>Forgot Password ?</Text>
            </View>
          </View>
          <Button
            text="Login"
            // loading={isPending}
            loadingColor={TWColors.WHITE}
            textStyle={{color: TWColors.WHITE, fontWeight: 'bold'}}
            backgroundColor={TWColors.DARK1C}
            containerStyle={[TWStyles.justifyCenter, {borderRadius: 13}]}
            onPress={handleSubmit(onSubmit)}
          />
          <Text style={[TWStyles.textAlignCenter, {color: TWColors.GREY6C7}]}>
            Haven't an account yet?{' '}
            <Text style={{color: TWColors.BLUE4D8}}>Register</Text>
          </Text>
          <View />
        </Card>
      </View>
    </View>
  );
};

export default Login;
