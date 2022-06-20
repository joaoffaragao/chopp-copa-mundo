import { Participante } from "../models/Participante.js"

export class Principal {

    static participantes = []
    static valorEsperadoUnitario = 0
    static valorTotal = 0
    static valorArrecadado = 0

    static criaParticipantes(participante) {

        const valorPago = participante.pagamentos.reduce((acc, valor) => { return acc + valor }, 0)

        const novoParticipante = new Participante(participante.id, participante.nome, participante.instagram, valorPago)
        return novoParticipante
    }

    static populaParticipantes(participantes) {

        participantes.forEach(participante => {
            const novoParticipante = Principal.criaParticipantes(participante)
            Principal.participantes.push(novoParticipante)
        })

        Principal.valorTotal = Principal.participantes.length * 600

        console.log(Principal.valorTotal)

    }

    static renderizaTabela(ul) {

        Principal.participantes.forEach(participante => {

            const card = Principal.criaCard(participante)
            ul.appendChild(card)

        })

    }

    static criaCard(participante) {

        /* <li class="participantes">
                    <p class="itemParticipantes ">Joao</p>
                    <p class="itemParticipantes">R$100.00 </p>
                    <p class="itemParticipantes">R$100.00 </p>
                    <p class="itemParticipantes">R$600.00 </p>
                </li> */

        const li = document.createElement("li")
        li.classList.add("participantes")

        const pNome = document.createElement("p")
        pNome.classList.add("itemParticipantes")
        pNome.innerText = participante.nome
        li.appendChild(pNome)

        const pValorPago = document.createElement("p")
        pValorPago.classList.add("itemParticipantes")
        pValorPago.innerText = participante.valorPago

        const pValorEsperado = document.createElement("p")
        pValorEsperado.classList.add("itemParticipantes")
        pValorEsperado.innerText = Principal.valorEsperadoUnitario

        const pValorTotal = document.createElement("p")
        pValorTotal.classList.add("itemParticipantes")
        pValorTotal.innerText = Principal.valorTotal

        li.append(pNome,pValorPago,pValorEsperado,pValorTotal)

        return li

    }

    static atualizaValorArrecadado(){

        Principal.valorArrecadado = Principal.participantes.reduce((acc,participante)=>{
            

            return participante.valorPago + acc

        },0)

        console.log(Principal.valorArrecadado)
    }

}