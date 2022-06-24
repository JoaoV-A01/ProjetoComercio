import * as React from 'react';
import{View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

export default function Cabecalho(){
    return(

        <View style={estilo.header}>
            <TouchableOpacity>
            <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Text style ={estilo.Texto}> Gamer Wolrd </Text>
            <TouchableOpacity>
            <Ionicons name="ios-search-sharp" size={24} color="white" />
            </TouchableOpacity>
        </View>

    )
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#2E446E',
        borderRadius:1,
        marginTop: 0,
        width:'100%',
        padding:15,
        margin: 0,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    Texto:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    }
})