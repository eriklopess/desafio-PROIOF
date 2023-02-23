import mongoose from 'mongoose';
import request from 'supertest';
import { correctObject, incorrectObject } from './data';

describe('/devices', () => {
    beforeAll(async () => {
        await request('http://localhost:3000').post('/devices').send({
            _id: '63f59fdd6ae315906d6bcc75',
            ...correctObject
        });
    });

    afterEach((done) => {
        mongoose.connection.dropCollection('devices');
        done();
    });
    afterAll((done) => {
        mongoose.connection.close();
        done();
    });
    describe('GET', () => {
        it('should be return 200 status code', async () => {
            const res = await request('http://localhost:3000').get('/devices');
            expect(res.status).toBe(200);
        });
        it('should be return an array', async () => {
            const res = await request('http://localhost:3000').get('/devices');
            expect(Array.isArray(res.body)).toBeTruthy();
        });
    });

    describe('POST', () => {
        it('should be return 201 status code', async () => {
            const res = await request('http://localhost:3000').post('/devices').send(correctObject);
            expect(res.status).toBe(201);
        });
        it('should be return an object', async () => {
            const res = await request('http://localhost:3000').post('/devices').send(correctObject);
            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('name');
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('informations');
        });
        it('should be return 400 status code', async () => {
            const res = await request('http://localhost:3000').post('/devices').send(incorrectObject);
            expect(res.status).toBe(400);
        });
        it('should be return an error', async () => {
            const res = await request('http://localhost:3000').post('/devices').send(incorrectObject);
            expect(res.body).toHaveProperty('error');
        });
    });
    describe('GET/:id', () => {
        it('should be return 200 status code', async () => {
            const res = await request('http://localhost:3000').get('/devices/63f59fdd6ae315906d6bcc75');
            expect(res.status).toBe(200);
        });
        it('should be return an object', async () => {
            const res = await request('http://localhost:3000').get('/devices/63f59fdd6ae315906d6bcc75');
            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('name');
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('informations');
        });
        it('should be return 404 status code', async () => {
            const res = await request('http://localhost:3000').get('/devices/60e0c3f1e3c1d8f2b8c0e0b1');
            expect(res.status).toBe(404);
        });
        it('should be return an error', async () => {
            const res = await request('http://localhost:3000').get('/devices/60e0c3f1e3c1d8f2b8c0e0b1');
            expect(res.body).toHaveProperty('error');
        });
    });
    describe('PUT/:id', () => {
        it('should be return 200 status code', async () => {
            const res = await request('http://localhost:3000').put('/devices/63f59fdd6ae315906d6bcc75').send(correctObject);
            expect(res.status).toBe(200);
        });
        it('should be return an object', async () => {
            const res = await request('http://localhost:3000').put('/devices/63f59fdd6ae315906d6bcc75').send(correctObject);
            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('name');
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('informations');
        });
        it('should be return 404 status code', async () => {
            const res = await request('http://localhost:3000').put('/devices/60e0c3f1e3c1d8f2b8c0e0b1').send(correctObject);
            expect(res.status).toBe(404);
        });
        it('should be return an error', async () => {
            const res = await request('http://localhost:3000').put('/devices/60e0c3f1e3c1d8f2b8c0e0b1').send(correctObject);
            expect(res.body).toHaveProperty('error');
        });
    });

    describe('DELETE/:id', () => {
        it('should be return 200 status code', async () => {
            const res = await request('http://localhost:3000').delete('/devices/63f59fdd6ae315906d6bcc75');
            expect(res.status).toBe(204);
        });
        it('should be return 404 status code', async () => {
            const res = await request('http://localhost:3000').delete('/devices/60e0c3f1e3c1d8f2b8c0e0b1');
            expect(res.status).toBe(404);
        });
        it('should be return an error', async () => {
            const res = await request('http://localhost:3000').delete('/devices/60e0c3f1e3c1d8f2b8c0e0b1');
            expect(res.body).toHaveProperty('error');
        });
    });
});
