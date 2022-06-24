import * as React from 'react';
import{View,Text,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import { Ionicons, FontAwesome5} from '@expo/vector-icons';
import Grupo from './grupo';
import EQUIPE from '../../dados/equipe';

export default function Rodape(){
    return(
        <View style={estilo.containerRodape}>
            <Text style ={estilo.Titulo}> Contatos </Text>
            <TouchableOpacity style={estilo.contatos}>
              <div >
                <Ionicons name = "logo-whatsapp" size={20} color="white" />
                <Text style ={estilo.Texto}> (11) 4002-8922 que vai dar PS2 </Text>
              </div>
              <div>
                <Ionicons name = "mail" size={20} color="white" />
                <Text style ={estilo.Texto}> gamer.wolrd01@gmail.com </Text>
              </div>
              <div>
                <FontAwesome5 name="discord" size={24} color="white" />
                <Text style ={estilo.Texto}> GamerWolrd#0110 </Text>
              </div>
            </TouchableOpacity>
            
            <Text style ={estilo.Titulo}> Equipe </Text>
              <FlatList 
                data = {EQUIPE}
                keyExtractor = {(item) => item.id}
                renderItem = { ({ item }) => (
                  <Grupo
                    nome = {item.nome}
                    texto = {item.texto}
                  />
                )}
              />
        </View>
    )
}

const estilo = StyleSheet.create({
  containerRodape:{
    backgroundColor:'#2E446E',
    marginTop: 50,
    width:'100%',
    height: '100%',
    padding: 20,
  },
  Titulo:{
    color: 'white',
    fontSize: 21,
    marginTop: 15,
    fontWeight: 'bold'
  },
  Texto:{
    color: 'white',
    fontSize: 15,
    marginLeft: 5,
  },
  contatos:{
    marginLeft: 10,
    margin: 10,
  }
})