const axios = require('axios');

describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2*2).toBe(4);
    });
});

describe('get messages', () => {
    it('should return 200 Ok', (done) => {
        axios.get('http://localhost:3000/messages').then((res) => {
            // console.log(res.data);
            expect(res.status).toEqual(200);
            done();
        });
    });

    it('should return a non-empty list', (done) => {
        axios.get('http://localhost:3000/messages').then((res) => {
            // console.log(res);
            expect(res.data.length).toBeGreaterThan(0);
            done();
        });
    });
});



