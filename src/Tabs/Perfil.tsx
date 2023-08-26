import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack
        flex={1}
        alignItems="center"
        p={5}
      >
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar 
          size="xl"
          source={{ uri: "https://images.pexels.com/photos/17991457/pexels-photo-17991457/free-photo-of-preto-negro-cropped-top-cropped.jpeg" }} 
          mt={5}
        />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>Armanda T. Clark</Titulo>
        <Text>12/12/1998</Text>
        <Text>El Sobrante, CA</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}