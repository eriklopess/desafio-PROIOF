import server from './App';
import CustomRouter from '../Router/Router';

import DeviceController from '../Controllers/Device.controller';
import { Device } from '../Interfaces/Device.interface';


const deviceController = new DeviceController();
const deviceRouter = new CustomRouter<Device>();

deviceRouter.addRoute(deviceController);

server.addRouter(deviceRouter.router);

export default server;