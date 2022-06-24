import * as React from 'react';
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons, FontAwesome5} from '@expo/vector-icons';

export default function Grupo({ nome, texto, nome2, texto2}) {
    return (     
          <View style={estilo.containerEquipe}>
            <TouchableOpacity style={estilo.contatos}>
              <div>
                <Ionicons name="people" size={20} color="white"/>
                <Text style ={estilo.Texto}>{nome}</Text>
                <FontAwesome5 name="github" size={20} color="white"/>
                <Text style ={estilo.Texto}>{texto}</Text>
              </div>
            </TouchableOpacity>
          </View>
    )
}

const estilo = StyleSheet.create({
    containerEquipe:{
        marginTop: 5,
        width:'100%',
        height: '1%',
        padding: 2,
    },
    Texto:{
      color: 'white',
      fontSize: 15,
      marginRight: 10,
      marginLeft: 10
    },
    contatos:{
      marginLeft: 10,
      margin: 1
    }
})