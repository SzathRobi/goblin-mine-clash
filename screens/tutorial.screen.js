import { useContext, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Button from '../components/button';
import { SettingsContext } from '../contexts/settings-context';

export default function Tutorial({ navigation }) {
  const { theme, language } = useContext(SettingsContext);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.title(theme)}>
        {language === 'En'
          ? 'Some Tutorial will be here'
          : 'Valami ismertető lesz itt'}
      </Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          {status.isPlaying ? 'Stop' : 'Play'}
        </Button>
        <Button onPress={() => navigation.navigate('Home')}>
          {language === 'En' ? 'Menu' : 'Menü'}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (theme) => {
    const bgColor = theme == 'Light' ? '#fff' : '#222';
    return {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: bgColor,
    };
  },
  title: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      color: textColor,
      textAlign: 'center',
      position: 'relative',
      bottom: 40,
      fontSize: 22,
    };
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
