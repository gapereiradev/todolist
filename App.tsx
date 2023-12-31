import { HomeScreen } from './src/screens';
import { Loading } from './src/components/Loading';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar } from 'react-native';


export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});
  return (
    <>
        {
          fontsLoaded ? (<HomeScreen />) : (<Loading />)
        }
        <StatusBar 
            barStyle="light-content"
          />
    </>
  );
}
