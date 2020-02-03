class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adiciona(event) {
    event.preventDefault();

    const arrDate = this._inputData.value.split("-");
    const formatedDate = arrDate.map((item, index) =>
      index === 1 ? item - 1 : item
    );

    let negociacao = new Negociacao(new Date(...formatedDate), 10, 1000);
  }
}
