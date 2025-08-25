import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-ExtraBold': require('../../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Medium': require('../../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Light': require('../../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-SemiBold': require('../../assets/fonts/Rubik-SemiBold.ttf'),
  });



    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        } else {
            console.log("Fonts not loaded yet");
        }
    }, [fontsLoaded]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
