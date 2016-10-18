const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
    } else if(req.url === '/bye'){
    
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Bye World\n');
    
    }
    else if (req.url === '/whatsup'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Whatsup World\n');
    }
     else if (req.url === '/mens'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('This is a mens World\n');
    }
     else if (req.url === '/cruel'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Cruel World\n');
    }
    else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }
        
});

httpServer.listen(8080);