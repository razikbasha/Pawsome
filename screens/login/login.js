import { Button, Text, View } from 'react-native';

function login({navigation }) {
 return (
   <View>
        <Text>login XXX</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
   </View>
  );
}

export default login;