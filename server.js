const http = require('http');
const HttpDispatcher = require('httpdispatcher');
const dispatcher = new HttpDispatcher();
const PirateBay = require('thepiratebay')


const PORT = 3000;

function handleRequest(request, response){
    try {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}
const server = http.createServer(handleRequest);

dispatcher.onGet("/pirateBay", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    PirateBay.search(req.params.term, {
        category: 'all',
        orderBy: req.params.order || 'name',
        sortBy: req.params.sort || 'asc'
    })
    .then(results => res.end(JSON.stringify(results)))
    .catch(err => console.log(err)) 
    
});

dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end("Error, the URL doesn't exist");
});

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});