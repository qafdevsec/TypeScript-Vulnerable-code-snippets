
import * as http from 'http';

function handleRequest(req: http.IncomingMessage): string {
    // Implement the logic for handling the request here
    // For this example, returning a simple JSON response
    return JSON.stringify({ message: "Request handled successfully." });
}

const server = http.createServer(function onRequest(req: http.IncomingMessage, res: http.ServerResponse) {
    let body: string;
    try {
        body = handleRequest(req);
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        //res.end(err.stack); // NOT OK
        return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", body.length.toString());
    res.end(body);
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
