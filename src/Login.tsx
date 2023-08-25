import { VStack, Image, Text, Box, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import Logo from './assets/Logo.png';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';

export default function Login() {
  return (
    <VStack 
      flex={1} 
      alignItems="center" 
      p={5}
      justifyContent="center"
    >

      <Image source={Logo} alt="Logo Voll" />
      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <EntradaTexto label="Email" placeholder="Insira seu endereço de email" />
        <EntradaTexto label="Senha" placeholder="Insira sua senha" />
      </Box>

      <Botao>
        Entrar
      </Botao>

      <Link href="https://www.google.com.br" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box 
        w="100%" 
        flexDirection="row"
        justifyContent="center"
        mt={8}
      >
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}
