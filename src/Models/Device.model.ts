import { Document, Schema, model as createModel } from "mongoose";
import { Device } from "../Interfaces/Device.interface";
import MongoModel from "./MongoModel";

interface DeviceDocument extends Device, Document {}

const DeviceSchema = new Schema<DeviceDocument>({
    name: { type: String, required: true },
    status: { type: String, required: true },
    informations: { type: Object, required: true },
});

export default class DeviceModel extends MongoModel<Device> {
    constructor(public model = createModel('Devices', DeviceSchema)) {
        super(model);
    }
}