import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';

export default function App() {
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
