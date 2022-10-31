import React, {useRef, useState} from 'react';
import {View, TextInput, Platform, SafeAreaView} from 'react-native';

import styles from './styles';

const CommentsInput = ({}) => {
  const inputRef = useRef();
  const inputHeight = 60;
  const [text, setText] = useState('');

  const onChangeTextHandler = txt => {
    setText(txt);
  };

  return (
    <SafeAreaView edges={['bottom']}>
      <View
        style={[
          styles.TextInputWrapper,
          {height: '100%'},
        ]}>
        <TextInput
          allowFontScaling={false}
          value={text}
          onChangeText={txt => onChangeTextHandler(txt)}
          selectionColor={
            Platform.OS === 'ios' ? '#fff' : 'rgba(255,255,255,0.3)'
          }
          placeholder={'placeholder'}
          placeholderTextColor={'#555'}
          multiline
          style={[
            styles.textInputStyles,
            {
              height: 350
            },
          ]}
          ref={inputRef}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommentsInput;

CommentsInput.propTypes = {};
