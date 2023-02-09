import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import CountryFlag from 'react-native-country-flag';
import LoginSvg from '../assets/login.svg';

import config from '../../config';
// import {generateOTP} from '../utils/login';
// import OtpForm from './OtpForm';
const Login = () => {
  const [phone, setPhone]: any = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <LoginSvg height={300} width={300} />
      </View>
      <View style={styles.input}>
        <Feather
          name="smartphone"
          size={20}
          color="#C6C6C6"
          style={{marginRight: 5}}
        />
        <CountryFlag isoCode="in" size={15} style={{marginRight: 5}} />
        <TextInput
          placeholder="Enter Phone Number"
          style={{color: 'black'}}
          keyboardType="numeric"
          value={phone}
          maxLength={10}
          onChangeText={e => setPhone(e)}
        />
      </View>
      <View style={{width: '90%', marginTop: 30}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: config.constants.primaryColor,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: '#fff',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10,
    borderColor: config.constants.borderColor,
  },
  imageView: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
