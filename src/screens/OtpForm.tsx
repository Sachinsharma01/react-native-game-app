// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import React, {useState} from 'react';
// import OTPSvg from '../assets/otp.svg';

// import config from '../../config';
// import {validateOTP} from '../utils/login';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// const OtpForm = ({navigation}:any) => {
//   // console.log("PROPSSSSSSSSSSSSSSSS", props);
//   const [otp, setOTP]: any = useState();
//   // const loginHandler = async () => {
//   //   const otpRes = await validateOTP(props.phone,otp);
//   //   console.log(otpRes);
//   //   if (otpRes.status === 'approved') {
//   //     // await AsyncStorage.setItem('login', 'LOGGED_IN')
//   //   } else {
//   //     Alert.alert('Incorrect OTP!');
//   //   }
//   // };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.imageView}>
//         <OTPSvg height={300} width={300} />
//       </View>
//       <View style={styles.input}>
//         <TextInput
//           placeholder="Enter OTP"
//           style={{color: 'black'}}
//           keyboardType="numeric"
//           value={otp}
//           maxLength={10}
//           onChangeText={(e) => setOTP(e)}
//         />
//       </View>
//       <View style={{width: '90%', marginTop: 30}}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('Home')}
//           style={{
//             backgroundColor: config.constants.primaryColor,
//             padding: 20,
//             borderRadius: 10,
//             marginBottom: 30,
//           }}>
//           <Text
//             style={{
//               textAlign: 'center',
//               fontWeight: '700',
//               fontSize: 16,
//               color: '#fff',
//             }}>
//             Validate!
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '90%',
//     paddingHorizontal: 10,
//     borderColor: config.constants.borderColor,
//   },
//   imageView: {
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default OtpForm;
