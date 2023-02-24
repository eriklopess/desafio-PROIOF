import { Device, DeviceSchema } from "../Interfaces/Device.interface";
import DeviceModel from "../Models/Device.model";
import Service, { ServiceError } from "./Service";

export default class DeviceService extends Service<Device> {
    constructor(public model = new DeviceModel()) {
        super(model);
    }

    public async create(obj: Device): Promise<Device | ServiceError> {
        const parsed = DeviceSchema.safeParse(obj);
        if (!parsed.success) {
            return {
                error: parsed.error
            }
        }

        return this.model.create(obj);
    }

}