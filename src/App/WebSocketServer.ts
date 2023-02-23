import ws from 'ws';
import http from 'http';

export default class WebSocketServer {
    private server: ws.Server;
    
    constructor(server: http.Server) {
        this.server = new ws.Server({ server });
        this.server.on('connection', (ws) => {
        ws.send('Hello from server');
        });
    }

    emit(event: string, data: any): void {
        this.server.clients.forEach((client) => {
            if (client.readyState === ws.OPEN) {
                client.send(JSON.stringify({ event, data }));
            }
        });
    }
}
