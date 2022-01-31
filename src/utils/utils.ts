//Reduz as casas decimais a 2, muda o separador de ponto para vírgula e adiciona um ponto na separação das centenas
export const formatCurrency = (value:number):string => {
  return value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export const formatId = (id:number):string => {
  return `${id}`.padStart(3, "0");
}