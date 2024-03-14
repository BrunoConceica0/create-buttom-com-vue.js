const vm = new Vue({
  el: "#app",
  data: {
    gridCol: true,
    tamanhoFonte: true,
    nome: "",
    largura: 100,
    tamanho: 30,
    fontSize: 14,
    fontFamily: "",
    bgColor: "",
    cor: "",
    borderRadius: 0,
  },
  methods: {
    incrementar() {
      this.fontSize++;
    },
    diminuir() {
      this.fontSize--;
    },
  },
});
