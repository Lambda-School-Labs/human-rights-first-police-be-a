// const supertest = require('supertest');
// const server = require('../../../api/allIncidents/incidentsRouter');
// const { request } = require('../../../api/app');

const request = require('supertest');
const server = require('../../.././api/app');

// let res = '';
// beforeEach(async () => {
//   res = await request(server).get('/incidents/getincidents');
// });

describe('Sanity Test', () => {
  it('should run a sanity test ', () => {
    expect(true).not.toBe(false);
  });
});

describe('testt', () => {
  it('should fetch DB and return a 200 status', async () => {
    const res = await request(server).get('/incidents/getincidents');
    expect(res.status).toBe(200);
  });

  it('should fecth DB and return an array with incidents', async () => {
    const res = await request(server).get('/incidents/getincidents');
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should fecth DB and return an incident with ID# 4', async () => {
    const res = await request(server).get('/incidents/getincidents');

    expect(res.body).toContainEqual(
      expect.objectContaining({ incident_id: 4 })
    );
  });
});