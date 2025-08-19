import http from 'k6/http'
import { sleep, check } from 'k6'
import { pegarBaseURL } from '../utils/variaveis.js'

export const options = {
    stages: [
        { duration: '5s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '05s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(90)<500', 'max<1000'],
        http_req_failed: ['rate<0.01']
    }
}

export default function () {
    const url = pegarBaseURL() + '/api/consultas/horarios-disponiveis?profissionalId=1&data=2025-08-18'

    const params = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    let res = http.get(url, params)
    check(res, { "status is 200": (res) => res.status === 200 })
    sleep(1)
}