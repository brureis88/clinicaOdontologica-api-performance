import http from 'k6/http'
import { sleep, check } from 'k6'
import { pegarBaseURL } from '../utils/variaveis.js'
const agendarConsulta = JSON.parse(open('../fixtures/agendarConsulta.json'))

export const options = {
    iterations: 10,
    thresholds: {
        http_req_duration: ['p(90)<300', 'max<1000'],
        http_req_failed: ['rate<0.01']
    }
}

export default function () {
    const url = `${pegarBaseURL()}/api/consultas/agendar`;
    const params = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    const dataBase = new Date()
    dataBase.setHours(9, 0, 0, 0)
    
    const diasParaAdicionar = (__ITER + 1) * 7 - 6
    let dataAgendamento = new Date(dataBase)
    dataAgendamento.setDate(dataBase.getDate() + diasParaAdicionar)

    let agendamento = { ...agendarConsulta }
    agendamento.data = dataAgendamento.toISOString()
    const payload = JSON.stringify(agendamento)

    const res = http.post(url, payload, params)
    console.log(res)
    check(res, { "status is 201": (res) => res.status === 201 })
    sleep(1)
}