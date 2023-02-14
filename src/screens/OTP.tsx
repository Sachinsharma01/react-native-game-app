import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/authContext';
import config from '../../config';
import OTPSvg from '../assets/otp.svg';

const OTP = ({navigation}: any) => {
  const [phone, setPhone]: any = useState('');
  const {login, token} = useContext(AuthContext);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <OTPSvg height={300} width={300} />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter OTP"
          style={{color: 'black', alignSelf: 'center'}}
          keyboardType="numeric"
          placeholderTextColor="#000"
          value={phone}
          maxLength={6}
          onChangeText={e => setPhone(e)}
        />
      </View>
      <View style={{width: '50%', marginTop: 30}}>
        <TouchableOpacity
          onPress={() => {
            login();
          }}
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
            Validate
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
    width: '70%',
    paddingHorizontal: 10,
    borderColor: config.constants.borderColor,
  },
  imageView: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OTP;
