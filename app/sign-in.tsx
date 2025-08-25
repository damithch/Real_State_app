import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View ,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../lib/appwrite'; // Adjust the import path as necessary

const { width } = Dimensions.get('window'); // Get screen width
const imageSize = width * 0.3; // Set image size to 30% of screen width

const handleLogin = () => {
  // Handle login logic here
  console.log('Login with Google pressed');
};

const SignIn = () => {
  const handlesignin = async () => {
    const result = await login();
    if (result) {
      console.log('Login successful');
      // Navigate to the main app or show a success message
    } else {
      Alert.alert('Login failed');
    }
  };
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='flex-1 items-center pt-10'>
        <Image
          source={require('../assets/images/onboarding.png')}
          className='h-12'
          style={{ width: imageSize, height: imageSize }} // Dynamic size
          resizeMode='contain'
        />

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-back-200'>Welcome Back!</Text>
          <Text className='text-base text-center font-rubik text-back-100'>Please sign in to your account</Text>
          <Text className='text-lg font-rubik text-back-100 text-center mt-12'>Login to Resate with Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white-500 p-4 rounded-full mt-4 shadow-zinc-200'>
            <View className='flex-row items-center justify-center'>
              <Image
                source={require('../assets/icons/google.png')} 
                className='h-5 w-5'
                resizeMode='contain'
              />
              <Text className='text-black text-center ml-2'>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;