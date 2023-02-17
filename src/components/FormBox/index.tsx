import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native'; 

import { Container } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';

export function FormBox() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  // const [done, setDone] = useState('');

  async function handleProductAdd(){
    firestore()
    .collection('products')
    .add({
      description,
      quantity,
      done: false,
    })
    .then(() => {
      Alert.alert('Menssagem', 'Produto adicionado\n com sucesso!');
      setDescription('');
      setQuantity(0);
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
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
        onChangeText={ value => setQuantity(Number(value))}
      />

      <ButtonIcon
        size='large'
        icon="add-shopping-cart"
        onPress={handleProductAdd}
      />
    </Container>
  );
}