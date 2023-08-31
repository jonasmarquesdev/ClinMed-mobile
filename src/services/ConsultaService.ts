import baseUrlConf from "./baseUrlConf";

export async function agendarConsulta(data: Date, especialistaId: string, pacienteId: string) {
  try {
    const resultado = await baseUrlConf.post('/consulta', {
      especialista: especialistaId,
      pacienteId: pacienteId,
      data: data
    })
    return resultado.data
  } catch (error) {
    console.log(error)
    return null;
  }
}