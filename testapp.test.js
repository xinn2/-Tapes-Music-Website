'use strict';

const request = require('supertest');
const app = require('./testapp');

describe('Testing info for Ariana', () => {
    test('GET /infos/list succeeds', () => {
        return request(app)
        .get('/infos/list')
        .expect(200);
    });

    test('GET /infos/list returns JSON', () => {
        return request(app)
        .get('/infos/list')
        .expect('Content-type', /json/);
    });

    test('GET /collabs/list succeeds', () => {
        return request(app)
        .get('/collabs/list')
        .expect(200);
    });

    test('GET /album/list succeeds', () => {
        return request(app)
        .get('/album/list')
        .expect(200);
    });

    test('POST /comments/add succeeds', () => {
        const params = {'comm': '"Nice"'};
        return request(app)
        .post('/comments/add')
        .send(params)
        .expect(200);
    });
});

describe('Testing info for Taylor', () => {
    test('GET /infos2/list succeeds', () => {
        return request(app)
        .get('/infos2/list')
        .expect(200);
    });

    test('GET /collabs2/list returns JSON', () => {
        return request(app)
        .get('/collabs2/list')
        .expect('Content-type', /json/);
    });

    test('GET /album2/list succeeds', () => {
        return request(app)
        .get('/album2/list')
        .expect(200);
    });

    test('GET /comments2/list returns JSON', () => {
        return request(app)
        .get('/comments2/list')
        .expect('Content-type', /json/);
    });

    test('POST /comments2/add succeeds', () => {
        const params = {'tscomm': '"Nice"'};
        return request(app)
        .post('/comments2/add')
        .send(params)
        .expect(200);
    });
});

describe('Testing info for Justin', () => {
    test('GET /infos3/list returns JSON', () => {
        return request(app)
        .get('/infos3/list')
        .expect('Content-type', /json/);
    });

    test('GET /collabs3/list returns JSON', () => {
        return request(app)
        .get('/collabs2/list')
        .expect('Content-type', /json/);
    });

    test('GET /album3/list succeeds', () => {
        return request(app)
        .get('/album3/list')
        .expect(200);
    });

    test('GET /album3/list includes Purpose', () => {
        return request(app)
        .get('/album3/list')
        .expect(/Purpose/);
    });

    test('POST /comments3/add succeeds', () => {
        const params = {'jbcomm': '"he is cute"'};
        return request(app)
        .post('/comments3/add')
        .send(params)
        .expect(200);
    });
});
