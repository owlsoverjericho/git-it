import http from 'node:http'

const PORT = 8000;

const server = http.CreateServer((req, res) => {
	res.end()
});

server.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`));
