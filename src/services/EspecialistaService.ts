import baseUrlConf from "./baseUrlConf";

export async function buscarEspecialistaPorEstado(estado: string, especialidade: string) {
  try {
    const resultado = await baseUrlConf.get('/especialista/busca', {
      params: {
        estado,
        especialidade
      }
    });
    return resultado.data;
  } catch (error) { 
    console.log(error);
    return null;
  }
}