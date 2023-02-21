import { Request, Response } from 'express';
import Service from '../Services/Service';

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

// eslint-disable-next-line no-shadow, no-unused-vars
export enum ControllerErrors {
    internal = 'Internal server error.',
    badRequest = 'Bad request.',
  }

export default abstract class Controller<T> {
  protected errors = ControllerErrors;

  protected service: Service<T>;

  public readonly route: string;

  constructor(service: Service<T>, route: string) {
    this.service = service;
    this.route = route;
  }

  abstract create(_req: RequestWithBody<T>, res: Response<T | ResponseError>):
  Promise<typeof res>;

  read = async (_req: Request, res: Response<T[] | ResponseError>): Promise<
  typeof res> => {
    try {
      const data = await this.service.read();
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  abstract readOne(req: Request<{ id: string }>, res: Response<T
  | ResponseError>): Promise<typeof res>;

  abstract update(req: RequestWithBody<T>, res: Response<T
  | ResponseError>): Promise<typeof res>;

  abstract delete(req: Request<{ id: string }>, res: Response<T
  | ResponseError>): Promise<typeof res>;
}