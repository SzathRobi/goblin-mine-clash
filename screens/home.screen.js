import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { BackHandler, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../components/button';
import { SettingsContext } from '../contexts/settings-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const { language, theme } = useContext(SettingsContext);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared!');
    } catch (error) {
      console.log(error);
      alert('Failed to clear the async storage.');
    }
  };

  //ion-android-exit
  return (
    <View style={styles.container(theme)}>
      <Pressable style={styles.icon} onPress={() => BackHandler.exitApp()}>
        <Ionicons name="exit" size={38} color="green" />
      </Pressable>
      <Text style={styles.title(theme)}>Goblin Mine Clash</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate('Levels')}>
        {language === 'En' ? 'Play' : 'Játék'}
      </Button>
      <Button onPress={() => navigation.navigate('Tutorial')}>
        {language === 'En' ? 'Tutorial' : 'Ismertető'}
      </Button>
      <Button onPress={() => navigation.navigate('Settings')}>
        {language === 'En' ? 'Settings' : 'Beállítások'}
      </Button>
      <Button onPress={clearStorage}>CLEAR STORAGE</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  title: (theme) => {
    const textColor = theme == 'Light' ? '#111' : '#fff';
    return {
      color: textColor,
      fontSize: 24,
    };
  },
  container: (theme) => {
    const bgColor = theme == 'Light' ? '#fff' : '#222';
    return {
      flex: 1,
      backgroundColor: bgColor,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
});
