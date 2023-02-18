import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native'; 

import { Container } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';

export function FormBox() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [success, setSuccess] = useState(false);
  // const [done, setDone] = useState('');

  function clearState(){
    ;

  }

  async function handleProductAdd(){
    firestore()
    .collection('products')
    .add({
      description,
      quantity,
      done: false,
    })
    .then(() => {
      setSuccess(true);
      setDescription('');
      setQuantity(0)
      Alert.alert('Menssagem', 'Produto adicionado\n com sucesso!');
      
    })
    .catch((error) => {
      console.log(error);
    })


  }

  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
        onChangeText={setDescription}
        value={success &&`${description}`}
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
        onChangeText={ value => setQuantity(Number(value))}
        value={success &&`${quantity}`}
      />

      <ButtonIcon
        size='large'
        icon="add-shopping-cart"
        onPress={handleProductAdd}
      />
    </Container>
  );
}