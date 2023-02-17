import * as React from 'react';
import {Image, StyleSheet, Text, ScrollView, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>
          As empresas mais importantes nos dias atuais.
        </Text>

        <Text style={estilo.subtitulo}>  Microsoft  </Text>
        <Image style={estilo.img} source={require('./assets/mico.jpg')} />

        <Text style={estilo.subtitulo}>  Apple  </Text>
        <Image style={estilo.img} source={require('./assets/apple.jpg')} />

        <Text style={estilo.subtitulo}>  BlackRock  </Text>
        <Image style={estilo.img} source={require('./assets/black.jpg')} />

        <Text style={estilo.subtitulo}>  Boeing  </Text>
        <Image style={estilo.img} source={require('./assets/boeing.jpg')} />

        <Text style={estilo.subtitulo}>  Google  </Text>
        <Image style={estilo.img} source={require('./assets/google.jpg')} />

        <Text style={estilo.subtitulo}>  LockHeed  </Text>
        <Image style={estilo.img} source={require('./assets/lock.jpg')} />
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    
  },
  titulo: {
    marginTop: 30,
    fontSize: 50,
    marginBottom:20
  },
  img: {
    width: 250,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  subtitulo:{
    fontSize:40
  }
});
