import { z } from "zod";

export const DeviceSchema = z.object({
    _id: z.any().optional(),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    status: z.enum(['Online', 'Offline']).optional(),
    informations: z.object({
        temperature: z.string().refine((value) => value?.includes("°C"), {
            message: "Temperature must be in °C"
        }).optional(),
        humidity: z.string().refine((value) => {
            if (!value) return true;
            const number = Number(value.replace("%", ""));
            return number >= 0 && number <= 100;
        }, {
            message: "Humidity must be between 0 and 100"
        }).refine((value) => value?.includes("%"), {
            message: "Humidity must be in %"
        }).optional(),
        luminosity: z.string().refine((value) => value.includes('lm')).optional(),
        battery: z.string().regex(/^0*(100\.00|[0-9]?[0-9]\.[0-9]{2})%?$/).optional(), 
    }),
});

export type Device = z.infer<typeof DeviceSchema>;
