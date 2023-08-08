import http from 'node:http'


const server = http.CreateServer((req, res) => {
	res.end()
});

const PORT = 8000;

server.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`));

console.log(`Added some changees to test the git diff option`)
