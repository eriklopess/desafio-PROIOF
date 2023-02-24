import express, { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import http from 'http';
import { readFile } from 'fs/promises';
import connectToDatabase from './connection';
import path from 'path';
import helmet from 'helmet';
import WebSocketServer from './WebSocketServer';

class App {
  public app: express.Application;
  private server: http.Server;
  public WebSocketServer: WebSocketServer;

  constructor() {
    this.app = express();
    this.app.disable('x-powered-by');
    this.app.use(express.json());
    this.app.use(helmet());
    this.setupSwagger();
    this.server = http.createServer(this.app);
    this.WebSocketServer = new WebSocketServer(this.server);
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public startServer(PORT: string | number): void {
    connectToDatabase();
    this.server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }

  private async setupSwagger(): Promise<void> {
    const json = JSON.parse(await readFile(path.resolve(__dirname, '..', 'docs', 'apischema.json'), 'utf8'));
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(json));
  }

  public getApp(): express.Application {
    return this.app;
  }
}

export default new App();