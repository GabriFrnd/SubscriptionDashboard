export const formatarMoeda = (valor) => {
  return `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`;
};

export const formatarData = (dataString) => {
  const data = new Date(dataString);
  return data.toLocaleDateString('pt-BR');
};