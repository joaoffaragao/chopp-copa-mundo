import { Principal } from "./controller/Principal.js";
import { participantes } from "./data/data.js";

Principal.populaParticipantes(participantes)

const ul = document.querySelector(".listaParticipantes")
Principal.atualizaValorArrecadado()
Principal.renderizaTabela(ul)