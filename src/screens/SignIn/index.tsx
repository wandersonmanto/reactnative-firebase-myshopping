import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Alert } from 'react-native';

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignInAnonymous(){
    const { user } = await auth().signInAnonymously();
    console.log(user);
  }

  function handleCreateUserAcount(){
    if(!email || !password){
      return Alert.alert('Menssagem', 'Preencha os campos e tente novamente!');
    }
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert('Menssagem', 'Usuário criado com sucesso.');
      
    })
    .catch((error) => {
      console.log(error.code);

      if(error.code === 'auth/email-already-in-use'){
       return Alert.alert('Menssagem', 'Este e-mail já está em uso.');
      }

      if(error.code === 'auth/invalid-email'){
        return Alert.alert('Menssagem', 'E-mail inválido.');
      }

      if(error.code === 'auth/weak-password'){
        return Alert.alert('Menssagem', 'A senha precisa ter 6 digitos ou mais.');
      }

    })
    setEmail('');
    setPassword('');

  }

  async function handleSignInWithEmailAndPassword(){
    if(!email || !password){
      return Alert.alert('Menssagem', 'Preencha os campos e tente novamente!');
    }

    // const { user } = await auth().signInWithEmailAndPassword(email, password);
    // console.log(user);

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {})
    .catch(error => {

      if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'){
        return Alert.alert('Menssagem', 'Usuário não encontrado!');
      }

    })
    
  }

  function handleForgotPassword(){
    if(!email){
      return Alert.alert('Menssagem', 'Preencha o campo e-mial e tente novamente!');
    }

    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert('Menssagem', 'Email para recuperação de senha enviado'))
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleSignInWithEmailAndPassword} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={handleForgotPassword} />
        <ButtonText title="Criar minha conta" onPress={handleCreateUserAcount} />
      </Account>
    </Container>
  );
}