import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import config from '../../config';

const ListItem = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={props?.image}
          style={styles.gameImage}
        />
        <View>
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.text}>{props.subtitle}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.playButton}>
        <Text style={styles.buttonText}>
            {props.isFree === 'Yes' && "Play"}
            {props.isFree === 'No' && props.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gameImage: {
    height: 55,
    width: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  text: {
    color: '#333',
    fontFamily: 'Roboto-medium',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10
  },
  playButton: {
    padding: 10,
    width: 100,
    borderRadius: 10,
    backgroundColor: config.constants.buttonColor,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
});

export default ListItem;
