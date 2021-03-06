/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, Image, TouchableOpacity, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
        this.calcular = this.calcular.bind(this)
    }

    calcular() {

        let imc = this.state.massa/(this.state.altura * this.state.altura)
        let s = this.state
        s.resultado = imc


        if(s.resultado <16){
            s.resultadoText = "Magresa Grave"
        } else if(s.resultado <17){
            s.resultadoText = "Magresa Moderada"
        } else if(s.resultado <18.5){
            s.resultadoText = "Magresa Leve"
        } else if(s.resultado <25){
            s.resultadoText = "Saudavel"
        } else if(s.resultado <30){
            s.resultadoText = "Sobrepeso"
        } else if(s.resultado <35){
            s.resultadoText = "Obesidade Grau I"
        } else if(s.resultado <40){
            s.resultadoText = "Obesidade Grau II (Severa)"
        } else{
            s.resultadoText = "Obseidade Grau III (Mórbida)"
        }

        this.setState(s)
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    //resizeMode="center"
                    style={styleImage.img}
                    source={require('./assets/madeinweb.png')}
                />

                <View style={styles.entradas}>
                    <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
                    <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
                </View>

                <TouchableOpacity style={styles.button}  onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
                <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
                <Text style={[styles.resultado, {fontSize:45}]}>{this.state.resultadoText}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    entradas: {
        flexDirection: 'row',
    },

    img: {

    },

    input: {
        height: 80,
        textAlign: "center",
        width: "50%",
        fontSize: 50,
        marginTop: 170,
        color: "gray"
    },

button:{
    backgroundColor:"#217BE0",
    margin:20,
    height: 60
},

buttonText:{
    bottom: 15,
    alignSelf: "center",
    padding:30,
    fontSize:25,
    color:"#6dc4a4",
    fontWeight:'bold'
},
resultado:{
     alignSelf:"center",
     color:"blue",
     fontSize:50,
     padding:10,
     bottom: 35

}

});

const styleImage = StyleSheet.create({

    img:{
        top: 140,
        //alignSelf: "center"
        left: 43
    }

});

