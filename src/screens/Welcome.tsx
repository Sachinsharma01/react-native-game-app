import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
// @ts-ignore
import GameSvg from '../assets/gaming.svg';

const Welcome = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <GameSvg height={300} width={300} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's Begin</Text>
        <Ionicons name="arrow-forward-outline" color="#fff" size={22} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
    textTransform: 'uppercase',
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'normal',
    fontSize: 20,
  },
  button: {
    backgroundColor: config.constants.primaryColor,
    padding: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    borderRadius: 10,
  },
});
