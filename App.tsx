import { NativeBaseProvider, StatusBar } from 'native-base';
import Login from './src/Login';

import { THEMES } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[900]} />
      <Login />
    </NativeBaseProvider>
  );
}
