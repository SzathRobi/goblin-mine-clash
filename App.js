import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsWrapper from './contexts/settings-context';
import HomeScreen from './screens/home.screen';
import TutorialScreen from './screens/tutorial.screen';
import SettingsScreen from './screens/settings.screen';
import SplashScreen from './screens/splash.screen';
import GameWrapper from './contexts/game-context';
import LevelsScreen from './screens/levels.screen';
import LevelIntroScreen from './screens/game-screens/level-intro.screen';
import ItemsNeededScreen from './screens/game-screens/items-needed.screen';
import BoardSetupScreen from './screens/game-screens/board-setup.screen';
import LevelScreen from './screens/game-screens/level.screen';
import GameEndScreen from './screens/game-screens/game-end.screen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GameWrapper>
      <SettingsWrapper>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ animation: 'none', headerShown: false }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Levels" component={LevelsScreen} />
            <Stack.Screen name="LevelIntro" component={LevelIntroScreen} />
            <Stack.Screen name="ItemsNeeded" component={ItemsNeededScreen} />
            <Stack.Screen name="BoardSetup" component={BoardSetupScreen} />
            <Stack.Screen name="Level" component={LevelScreen} />
            <Stack.Screen name="GameEnd" component={GameEndScreen} />
            <Stack.Screen name="Tutorial" component={TutorialScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SettingsWrapper>
    </GameWrapper>
  );
}
