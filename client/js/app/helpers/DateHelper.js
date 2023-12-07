class DateHelper {
  static textoParaData(texto) {
    /\d{4}-\d{2}-\d{2}/.test(texto);
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    );
  }

  static dataParaTexto(data) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error("Deve estar no formato aaaa-mm-dd");

    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    );
  }
}
