import { Box, ScrollView, VStack } from "native-base";
import { Botao } from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { useState } from "react";
import { buscarEspecialistaPorEstado } from "../services/EspecialistaService";
import { NavigationProps } from "../@types/navigation";

interface Especialista {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string
}

export default function Explorar({ navigation }: NavigationProps<'Explorar'>) {
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState([]);

  async function buscar() {
    if (!estado || !especialidade) return null
    const resultado = await buscarEspecialistaPorEstado(estado, especialidade);
    if(resultado) {
      setResultadoBusca(resultado);
      console.log(resultado);
    }
  }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent={"flex-start"} p={5}>

        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <EntradaTexto
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Botao mt={3} mb={3} onPress={buscar}>
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
        {resultadoBusca?.map((especialista: Especialista, index) => (
          <VStack flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}
          >
            <CardConsulta
              name={especialista.nome}
              image={especialista.imagem}
              specialty={especialista.especialidade}
              align="center"
              onPress={() => navigation.navigate('Agendamento', {
                especialistaId: especialista.id
              })}
            />
          </VStack>
        ))}

      </VStack>
    </ScrollView>
  );
}