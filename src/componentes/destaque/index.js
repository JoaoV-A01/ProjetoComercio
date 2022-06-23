import * as React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

//Criando a função e recebendo por props o titulo valor e imgagem do jogo
export default function Jogos({ titulo, valor, imagem }) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
          <Image style={estilo.images} source={require(`../../imagens/${imagem}`)}/>
          <Text style={estilo.titulo}>{titulo}</Text>
          <Text style={estilo.valor}>{valor}</Text>
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
        width: 299,
        height: 200,
        marginLeft: 1,
    },
    titulo: {
        color: "black",
        backgroundColor: "white",
        width: '100%',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
    valor: {
        color: "#ADC4F0",
        fontSize: 12,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: "75%",
        borderRadius: 3,
    },
});