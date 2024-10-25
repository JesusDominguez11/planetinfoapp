// PlanetDetail.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';

//data
import planetData from '../../data/planetData';

const PlanetScreen = ({ route }) => {
    const { planetId } = route.params;    
    const planet = planetData.find(p => p.id === planetId);

    console.log('Planeta:' + planet);

    // const { title, description } = route.params;

        // Manejar el caso en que no se encuentra el planeta
        if (!planet) {
          return (
              <View style={styles.container}>
                  <Text>No se encontró el planeta.</Text>
              </View>
          );
      }

    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}: {item.value}</Text>
        </View>
      );

      const data = [ 
        // { value: <Image style={styles.imgPlanet} source={planet.image} ></Image>},
        { title: 'Descripción', value: planet.description },
        { title: 'Distancia del Sol', value: planet.distanceFromSun },        
        { title: 'Diámetro', value: planet.diameter },
        { title: 'Masa', value: planet.mass },
        { title: 'Período Orbital', value: planet.orbitalPeriod },
        { title: 'Período de Rotación', value: planet.rotationPeriod },
        { title: 'Atmósfera', value: planet.atmosphere },
        { title: 'Lunas', value: planet.moons },
        { title: 'Temperatura Superficial', value: planet.surfaceTemperature },
        { title: 'Características Notables', value: planet.notableFeatures.join(', ') },
      ];

    const [ image, setImage ] = useState('../../img/001p.png')

      return (
        <View style={styles.container}>
          <Text style={styles.title}>{planet.title}</Text>
          <Image style={styles.imgPlanet} source={planet.image} ></Image>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          ></FlatList>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#121212', // Fondo oscuro
            padding: 20,
        },
        title: {
            fontSize: 24,
            color: '#ffffff', // Texto blanco
            fontWeight: 'bold',
            marginBottom: 20,
        },
        item: {
            backgroundColor: '#1e1e1e', // Fondo de los ítems
            padding: 15,
            borderRadius: 10,
            marginVertical: 5,
            // Sombras
            shadowColor: '#000', // Color de la sombra
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25, // Opacidad de la sombra
            shadowRadius: 3.5, // Radio de la sombra
            elevation: 5, // Elevación para Android
        },
        itemTitle: {
            fontSize: 16,
            color: '#ffffff', // Texto blanco para ítems
        },
        imgPlanet: {
            width: 400,
            height: 400,
            resizeMode: 'contain',
            alignSelf: 'center',
        },
    });

export default PlanetScreen;
