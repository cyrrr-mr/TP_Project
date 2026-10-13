import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

// Application principale Nike Showcase
export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});