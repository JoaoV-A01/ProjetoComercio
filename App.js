import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Cabecalho from './src/componentes/cabecalho';
import JOGOS from './src/dados/jogos';
import Jogos from './src/componentes/destaque';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho/>
      <Text style={styles.paragraph}>
        Bem-vindo a nossa loja GAMER  
      </Text>
        
      <View>
      <Text style={styles.titulo}>
        Jogos em Destaque  
      </Text>   
        <FlatList
          horizontal = {true}
          data = {JOGOS}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

            <Jogos
              titulo = {item.nome}
              imagem = {item.imagem}
              valor = {item.valor}
            />
          )}
        />

        <Text style={styles.titulo}>
        Ofertas especias  
        </Text>
        <FlatList
          horizontal={true}
          data = {JOGOS}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

            <Jogos
              titulo = {item.nome}
              imagem = {item.imagem}
              valor = {item.valor}
            />
          )}
        />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E74BA',
    alignItems: 'cent',
    justifyContent: 'cent',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titulo: {
    color: 'white',
    margin: 5,
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
