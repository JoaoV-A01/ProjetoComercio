import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons,FontAwesome5} from '@expo/vector-icons';


export default function Botao({Logo,texto}) {

    return(
        <View style={estilo.containerBotoes1}>
          <TouchableOpacity style={[estilo.botoes]}>
          <div>
            <Ionicons name="logo-playstation" size={20} color="white"/>
            <Text style ={estilo.textoBotao} > PS3 </Text>
          </div>
          <div>
            <Ionicons name="logo-xbox" size={20} color="white"/>
            <Text style ={estilo.textoBotao} > Xbox </Text>
          </div>
          <div>
            <Ionicons name="logo-steam" size={20} color="white"/>
            <Text style ={estilo.textoBotao} > Steam </Text>
          </div>
          <div>
            <FontAwesome5 name="gamepad" size={20} color="white"/>
            <Text style ={estilo.textoBotao} > Nintendo </Text>
          </div>
          </TouchableOpacity>
        </View>
    );
}
const estilo = StyleSheet.create({
    
    containerBotoes1:{
      marginLeft: 10,
       justifyContent:"center"
    },
    textoBotao:{
      color: 'white',
      fontWeight: 'bold',
      marginRight: 15
    },
    botoes:{
      width:'100%',
      alignItems:'center',
      flexDirection: 'row',
    }
})