//para criar um servidor Node http, precisamos importar a biblioteca http para o nosso projeto
import http from 'http'
//Nós podemos adicionar rotas, links para acessarmos os serviços disponíveis através da nossa API. De um lado, nós temos o que será exibido na url e do outro, temos a resposta
const routes = {
    '/':'Home',
    '/clientes':'Exibindo Clientes',
    '/cameras':'Exibindo Câmeras'

}

//Instanciamos o http para criarmos o nosso servidor para responder a requisições
const server = http.createServer((req, res) => {
    //Aqui nós criamos um cabeçalho, com o status e o tipo de dados que será exibido
    res.writeHead(200, {'Content-Type':'text/plain'})
    //Nós podemos responder à requisição que está sendo feita ao nosso servidor dom base na rota que está sendo acessada
    res.end(routes[req.url])
    res.se
})

server.listen(8000, () => {
    console.log('Server Running')
})