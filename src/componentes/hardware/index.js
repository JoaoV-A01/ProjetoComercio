import * as React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

//Criando a função e recebendo por props o titulo valor e imgagem do jogo
export default function Hard({ titulo, valor, imagem, desconto }) {
    return (
        <TouchableOpacity style={estilo.containerHard}>
          <Image style={estilo.images} source={require(`../../imagens/hardware/${imagem}`)}/>
          <Text style={estilo.titulo}>{titulo}</Text>
          
          <View style={estilo.flex}>
            <Text style={estilo.desconto}>{desconto}</Text>
            <Text style={estilo.valor}>{valor}</Text>
          </View>
        </TouchableOpacity>
    );
}
const estilo = StyleSheet.create({

    containerHard: {
        backgroundColor: "#2E446E",
        borderRadius: 5,
        marginTop: 1,
        padding: 10,
        margin: 1,
        alignItems: "",
        //justifyContent: "space-between",
        width: 400,
        height: 300,
        marginLeft: 1,
    },
    titulo: {
        color: "white",
        //backgroundColor: "white",
        width: '100%',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
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
        height: "80%",
        borderRadius: 3,
    },
    flex: {
      width: "60%",
      marginTop: 5,
      marginLeft: "43%",
      backgroundColor: "black",
      flexDirection: 'row'
    }
});