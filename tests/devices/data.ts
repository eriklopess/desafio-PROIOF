import { Device } from '../../src/Interfaces/Device.interface';

export const correctObject: Device = {
    name: 'test',
    status: 'Online',
    informations: {
        temperature: '100°C',
        battery: '25.06%',
        humidity: '100%'
    }
}

export const incorrectObject = {
    name: 'test',
    status: 'Online',
    informations: {
        temperature: '100 C',
        battery: '25',
        humidity: '100'
    }
}