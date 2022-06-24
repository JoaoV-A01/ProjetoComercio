import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Cabecalho from './src/componentes/cabecalho';
import Botao from './src/componentes/botao/index';
import JOGOS from './src/dados/jogos';
import JGOTY from './src/dados/jogosGoty';
import Jogos from './src/componentes/destaque';
import HARD from './src/dados/hardware';
import Hard from './src/componentes/hardware';
import Rodape from './src/componentes/rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho/>
      
      <Botao/>
        
      <View>
      <Text style={styles.titulo}>
        Jogos GOTY  
      </Text>   
        <FlatList
          horizontal = {true}
          data = {JGOTY}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

            <Jogos
              titulo = {item.nome}
              imagem = {item.imagem}
              desconto = {item.desconto}
              valor = {item.valor}
              dev = {item.dev}
              dist = {item.dist}
              
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
              desconto = {item.desconto}
              valor = {item.valor}
              dev = {item.dev}
              dist = {item.dist}
            />
          )}
        />

        <Text style={styles.titulo}>
        Hardware  
        </Text>
        <FlatList
          horizontal={true}
          data = {HARD}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

            <Hard
              titulo = {item.nome}
              imagem = {item.imagem}
              desconto = {item.desconto}
              valor = {item.valor}
            />
          )}
        />
      </View>

      <View>
      <Rodape>
        
      </Rodape>
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
