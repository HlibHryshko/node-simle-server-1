const http = require('http');

const server = http.createServer((req, res) => {
    
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Greeting</title></head>');
        res.write('<body>');
        res.write('<h1>Hi everyone</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="createUser"><button type="submit">Create User</submit></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end()
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<ul><li>Lena Golovach</li><li>Don Iagon</li><li>Mathew Bal</li><ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end()
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        console.log('suuiiiii');

        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);

        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

});

server.listen(3000);