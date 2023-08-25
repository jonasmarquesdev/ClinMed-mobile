import { NativeBaseProvider, StatusBar } from 'native-base';
import Rotas from './src/Rotas';

import { THEMES } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[900]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
