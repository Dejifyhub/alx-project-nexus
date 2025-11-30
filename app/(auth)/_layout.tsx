import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from 'expo-router';
export default function _Layout() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
      <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
        
          </ScrollView>
          <Slot/>
    </KeyboardAvoidingView>
  )
}