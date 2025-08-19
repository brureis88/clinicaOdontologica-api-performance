
# Testes de Performance da API Clínica Odontológica com JavaScript e K6

Repositório para testes de performance utilizando [K6](https://k6.io/) com scripts escritos em JavaScript.

## 🔍 Introdução

Este projeto tem como objetivo realizar testes de carga e performance em APIs REST, simulando diferentes cenários de agendamentos de consulta e validando a performance dos endpoints. Os testes são escritos em JavaScript e executados utilizando a ferramenta K6.

## 🛠️ Tecnologias Utilizadas

- [K6](https://k6.io/) - Ferramenta de teste de carga de código aberto
- JavaScript (ES6) - Linguagem para escrita dos scripts de teste
- Node.js - Utilizado para instalação de dependências (caso necessário)
- Variáveis de ambiente para configuração dinâmica

## 📁 Estrutura do Repositório

```
.
├── fixtures/              # Dados de entrada para os testes (ex: payloads)
├── helpers/               # Funções utilitárias reutilizáveis para interação com a API
├── tests/                 # Casos de teste
|── utils/                 # Funções utilitárias
|── config/                # Arquivo de configuração
└── README.md              # Este documento
```

## 🗂️ Objetivo de Cada Grupo de Arquivos

- `fixtures/`: Dados de entrada para os testes (ex: usuários, payloads).
- `helpers/`: Funções utilitárias reutilizáveis para interação com a API.
- `tests/`: Casos de teste.
- `utils/`: Funções utilitárias.
- `config/`: Arquivo de configuração.
- `README.md`: Arquivo de documentação do projeto.

## 🚀 Modo de Instalação

1. Instale o [K6](https://k6.io/docs/getting-started/installation/) na sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/brureis88/clinicaOdontologica-api
   cd projetoClinica
   ```

## ▶️ Modo de Execução

1. Altere o arquivo `config.local.json' e defina a URL base da API a ser testada:
   ```json
   {
    "baseUrl": "http://localhost:3000"
   }
   ```

2. Execute o teste com o K6:
   ```bash
   k6 run tests/consultaAgendaProfissional.test.js
   ```
   Certifique-se de passar a variável de ambiente `BASE_URL`, caso não esteja usando um `config.local.json` ou uma abordagem de carregamento automático:

   ```bash
   k6 run tests/consultaAgendaProfissional.test.js -e BASE_URL=http://localhost:3000
   ```

3. Para acompanhar o relatório em tempo real via dashboard web e exportar os resultados:
   ```bash
   K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/consultaAgendaProfissional.test.js -e BASE_URL=http://localhost:3000
   ```

   Após a execução, o relatório estará salvo como `html-report.html`