import baseUrlConf from "./baseUrlConf";

export async function fazerLogin(email: string, senha: string) {
  if (!email || !senha) return null; // verifica se vazio
  try {
    const resultado = await baseUrlConf.post("/auth/login", {
      email,
      senha
    });
    console.log(resultado.data);
    return resultado.data
  } catch (error) {
    console.log(error);
  }
}
