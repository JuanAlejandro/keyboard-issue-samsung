import React, { useRef, useState } from 'react';
import {
  View, TextInput, Text, Button, ScrollView,
} from 'react-native';

function CommentsInput() {
  const [valueState, setValueState] = useState('valueState');
  const [showValueState, setShowValueState] = useState(false);

  const valueRef = useRef('valueRef');
  const [showValueRef, setShowValueRef] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: '#fff', height: '100%', padding: 16 }}>
      <View>
        <Text>TextInput using useState</Text>
        <TextInput placeholder="type something long enough to crash the app" multiline onChangeText={(txt) => setValueState(txt)} />
        <Button title="Submit" onPress={() => setShowValueState(true)} />
        {showValueState && <Text>{`Your input: ${valueState}`}</Text>}
      </View>
      <View style={{
        backgroundColor: '#000', height: 1, marginTop: 32, marginBottom: 32,
      }}
      />
      <View>
        <Text>TextInput using useRef</Text>
        <TextInput placeholder="type something long enough to crash the app" multiline onChangeText={(txt) => { valueRef.current = txt; }} />
        <Button title="Submit" onPress={() => setShowValueRef(true)} />
        {showValueRef && <Text>{`Your input: ${valueRef.current}`}</Text>}
      </View>
    </ScrollView>
  );
}

export default CommentsInput;
