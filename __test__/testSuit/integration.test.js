const request = require('supertest');

describe('Login API Test', () => {
  it('should return JWT token when login is successful', async () => {
    const res = await request('http://localhost:1337')
      .post('/api/auth/local')
      .send({
        identifier: 'test1@gmail.com',
        password: 'test1pass',
      });

    // ตรวจสอบว่า response status = 200 และมี JWT ใน response
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('jwt');
    expect(typeof res.body.jwt).toBe('string');
  });

  it('should return error message when login fails', async () => {
    const res = await request('http://localhost:1337')
      .post('/api/auth/local')
      .send({
        identifier: 'wrong-email@gmail.com',
        password: 'wrong-password',
      });

    // ตรวจสอบว่า response status = 400 และมีข้อความ error
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error.message).toBe('Invalid identifier or password');
  });

});