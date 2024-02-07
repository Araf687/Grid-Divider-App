import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { useState } from 'react';
import SplashScreenComponent from './components/SplashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  if (isLoading) {
    return <SplashScreenComponent />
  }
  return (
    <View>
      <StatusBar style="auto" />
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
