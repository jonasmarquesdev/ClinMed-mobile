import { Paciente } from "../interfaces/Paciente";
import baseUrlConf from "./baseUrlConf";


export async function cadastrarPaciente(paciente: Paciente){
  if(!paciente) return null;

  try {
    const resultado = await baseUrlConf.post('/paciente', paciente)
    console.log(resultado.data)
    return resultado.data
  }
  catch(error){
    console.log(error)
    return null
  }

}