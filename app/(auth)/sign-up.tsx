import { View, Text,Button } from 'react-native'
import {router} from 'expo-router';

const Signup = () => {
  return (
    <View>
          <Text>Signup</Text>
           <Button title = "Sign In " onPress={() => router.push("/sign-in")} />
    </View>
  )
}

export default Signup