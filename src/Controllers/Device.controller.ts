import { Request, Response } from "express";
import { Device } from "../Interfaces/Device.interface";
import DeviceService from "../Services/Device.service";
import Controller, { RequestWithBody, ResponseError } from "./Controller";


export default class DeviceController extends Controller<Device> {
    constructor(public service = new DeviceService()) {
        super(service, "/devices");
    }

    create = async (req: RequestWithBody<Device>, res: Response<ResponseError | Device>): Promise<typeof res> => {
        try {
            const device = await this.service.create(req.body);
            if (device && "error" in device)
                return res.status(400).json(device);
            
            return res.status(201).json(device);
        } catch (error) {
            return res.status(500).json({
                error: this.errors.internal
            });
        }
    }

    read = async (_req: Request, res: Response<Device[] | ResponseError>): Promise<typeof res> => {
        try {
            const data = await this.service.read();
            return res.json(data);
        } catch (error) {
            return res.status(400).json({ error: this.errors.internal });
        }
    }

    readOne = async (req: Request, res: Response<ResponseError | Device>): Promise<typeof res> => {
        try {
            const device = await this.service.readOne(req.params.id);
            if (!device)
                return res.status(404).json({
                    error: this.errors.notFound
                });

            return res.status(200).json(device);
        } catch (error) {
            return res.status(500).json({
                error: this.errors.internal
            });
        }
    }

    update = async (req: RequestWithBody<Device>, res: Response<ResponseError | Device>): Promise<typeof res> => {
        try {
            const device = await this.service.update(req.params.id, req.body);
            if (!device)
                return res.status(404).json({
                    error: this.errors.notFound
                });

            return res.status(200).json(device);
        } catch (error) {
            return res.status(500).json({
                error: this.errors.internal
            });
        }
    }

    delete = async (req: Request, res: Response<ResponseError | Device>): Promise<typeof res> => {
        try {
            const device = await this.service.delete(req.params.id);
            if (!device)
                return res.status(404).json({
                    error: this.errors.notFound
                });

            return res.status(200).json(device);
        } catch (error) {
            return res.status(500).json({
                error: this.errors.internal
            });
        }
    }
}