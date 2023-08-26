import { Box, ScrollView, VStack } from "native-base";
import { Botao } from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";

export default function Explorar() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent={"flex-start"} p={5}>

        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
          />
          <EntradaTexto
            placeholder="Digite sua localização"
          />
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo 
          color="blue.500" 
          mb={5}
          alignSelf="center"
        >
          Resultado da Busca
        </Titulo>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}
          >
            <CardConsulta
              name='Dr. André Cunha'
              image='https://images.pexels.com/photos/17991457/pexels-photo-17991457/free-photo-of-preto-negro-cropped-top-cropped.jpeg'
              specialty='Cardiologista'
              align="center"
            />
          </VStack>
        ))}

      </VStack>
    </ScrollView>
  );
}