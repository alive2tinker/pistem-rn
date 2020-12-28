import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function App()
{
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={[styles.h1, styles.primaryTextColor]}>Pistem</Text>
        <Text style={[styles.primaryTextColor, {marginTop:10}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ma</Text>
        <View style={styles.gridContainer}>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={require('./src/images/search.png')} />
            <TouchableOpacity onPress={()=>alert("hello")}>
              <Text style={styles.cardText}>Find Value</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={require('./src/images/car.png')} />
            <Text style={styles.cardText}>Sell Your Car</Text>
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={require('./src/images/binoculars.png')} />
            <Text style={styles.cardText}>Find me a Car</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F228D',
    padding: 10
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  primaryTextColor: {
    color: '#FFB84E'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '47%',
    maxHeight: 150,
    borderRadius: 10,
    padding: 5,
    margin: 5
  },
  cardImage: {
    width: 100,
    height: 100
  },
  cardText: {
    fontWeight: 'bold',
    marginTop: 20
  }
});
