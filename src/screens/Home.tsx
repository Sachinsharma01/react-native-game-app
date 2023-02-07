import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView, Text} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})