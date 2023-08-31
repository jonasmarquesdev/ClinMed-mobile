import { Text, Avatar, VStack } from 'native-base';
import { Botao } from './Botao';

interface CardProps {
  name: string;
  image: string;
  specialty: string;
  date?: string;
  wasAnswered?: boolean; // foi atendido
  wasScheduled?: boolean; // foi agendado
  align?: string;
  onPress?: () => void;
}

export function CardConsulta({
  name,
  image,
  specialty,
  date,
  wasAnswered,
  wasScheduled,
  align,
  onPress
}: CardProps) {
  return (
    <VStack 
      w="100%" 
      bg={wasAnswered ? 'blue.100' : 'white'} 
      p={5} 
      borderRadius="lg"
      shadow="2"
      mb={5}
    >
      <VStack flexDirection="row" justifyContent={align}>
        <Avatar 
          size="lg"
          source={{ uri: image }} 
        />
        <VStack pl={4}>
          <Text fontSize="md" bold>{name}</Text>
          <Text>{specialty}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>

      <Botao mt={4} onPress={onPress}>
        {wasScheduled ? 'Cancelar' : 'Agendar consulta'}
      </Botao>
    </VStack>
  );
}