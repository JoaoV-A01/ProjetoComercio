import * as React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

//Criando a função e recebendo por props o titulo valor e imgagem do jogo
export default function Jogos({ titulo, valor, imagem, desconto, dev, dist }) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
          <Image style={estilo.images} source={require(`../../imagens/jogos/${imagem}`)}/>
          <Text style={estilo.titulo}>{titulo}</Text>
          
          <View style={estilo.flex}>
            <Text style={estilo.desconto}>{desconto}</Text>
            <Text style={estilo.valor}>{valor}</Text>
          </View>
          <Text style={estilo.texto}>{dev}</Text>
          <Text style={estilo.texto}>{dist}</Text>
        </TouchableOpacity>
    );
}
const estilo = StyleSheet.create({

    containerJogos: {
        backgroundColor: "#2E446E",
        borderRadius: 5,
        marginTop: 1,
        padding: 10,
        margin: 1,
        alignItems: "",
        //justifyContent: "space-between",
        width: 400,
        height: 380,
        marginLeft: 1,
    },
    titulo: {
        color: "white",
        //backgroundColor: "white",
        width: '100%',
        fontSize: 20,
        fontWeight: "bold",
        //textAlign: 'center',
    },
    desconto: {
      color: "black",
      backgroundColor: "#ADFF2F",
      fontSize: 18,
      fontWeight: "bold",
    },
    valor: {
        color: "#ADC4F0",
        fontSize: 13,
        marginLeft: 10,
        marginTop: 5,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: "70%",
        borderRadius: 3,
    },
    texto: {
      color: "white",
      fontSize: 15,
    },
    flex: {
      width: "60%",
      marginLeft: "43%",
      backgroundColor: "black",
      flexDirection: 'row'
    }
});