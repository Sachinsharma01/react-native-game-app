import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {ICustomSwitch} from '../interfaces/ICustomSwitch';
import config from '../../config';

const ToggleButton = ({
  option1,
  option2,
  onSelect,
  selectionMode,
}: ICustomSwitch) => {
  const [selection, setSelection] = useState(selectionMode);
  const updateSwitchState = (value: number) => {
    setSelection(value);
    onSelect(value)
  };
  return (
    <View style={styles.switchView}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchState(1)}
        style={{
          backgroundColor: selection === 1 ? config.constants.primaryColor : '#e4e4e4',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            color: '#fff',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchState(2)}
        style={{
          backgroundColor: selection === 2 ? config.constants.primaryColor : '#e4e4e4',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            color: '#fff',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switchView: {
    height: 44,
    width: '100%',
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    borderColor: '#AD40AF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default ToggleButton;
