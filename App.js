import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './comps/buttons/button';
import Card from './comps/cards/card';
import ExpCard from './comps/cards/expiringCard';
import HeaderCard from './comps/cards/headerCard';
import InputCard from './comps/cards/inputCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button />
      <Card />
      <ExpCard />
      <HeaderCard />
      <InputCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
