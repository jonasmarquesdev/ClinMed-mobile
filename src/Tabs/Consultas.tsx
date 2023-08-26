import { Divider, VStack, ScrollView } from 'native-base';
import { CardConsulta } from '../components/CardConsulta';
import { Titulo } from '../components/Titulo';
import { Botao } from '../components/Botao';

export default function Consultas() {
  return (
    <ScrollView p={5}>
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

      <Titulo 
        color="blue.500" 
        fontSize="lg" 
        alignSelf="flex-start"
        mb={2}
      >
        Resultado da busca
      </Titulo>

      <CardConsulta 
        name='Dr. André Cunha'
        image='https://images.pexels.com/photos/17991457/pexels-photo-17991457/free-photo-of-preto-negro-cropped-top-cropped.jpeg'
        specialty='Cardiologista'
        date='20/04/2021'
        wasScheduled
      />

      <Titulo 
        color="blue.500" 
        fontSize="lg" 
        alignSelf="flex-start"
        mb={2}
      >
        Consultas passadas
      </Titulo>

      <CardConsulta 
        name='Dr. André Cunha'
        image='https://images.pexels.com/photos/17991457/pexels-photo-17991457/free-photo-of-preto-negro-cropped-top-cropped.jpeg'
        specialty='Cardiologista'
        date='20/04/2021'
        wasAnswered
      />
      <CardConsulta 
        name='Dr. André Cunha'
        image='https://images.pexels.com/photos/17991457/pexels-photo-17991457/free-photo-of-preto-negro-cropped-top-cropped.jpeg'
        specialty='Cardiologista'
        date='20/04/2021'
        wasAnswered
      />
      <CardConsulta 
        name='Dr. André Cunha'
        image='https://images.pexels.com/photos/17991457/pexels-photo-17991457/free-photo-of-preto-negro-cropped-top-cropped.jpeg'
        specialty='Cardiologista'
        date='20/04/2021'
        wasAnswered
      />

      <Divider mt={5} />
    </ScrollView>
  );
}