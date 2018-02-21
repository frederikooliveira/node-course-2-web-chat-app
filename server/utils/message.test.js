const expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', () =>{
        var from = 'Fred';
        var text = 'Hey this is a test';
        var result = generateMessage(from, text);

        expect(result).toInclude({from, text});
        expect(typeof result.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', ()=>{
    it('should generate correct location object', ()=>{
        var from = 'Admin';
        var latitude = 1;
        var longitude = 2;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var result = generateLocationMessage(from, latitude, longitude);

        expect(result).toInclude({from,url});
        expect(typeof result.createdAt).toBe('number');
    })
})