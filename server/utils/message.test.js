const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', () =>{
        var from = 'Fred';
        var text = 'Hey this is a test';
        var result = generateMessage(from, text);

        expect(result).toInclude({from, text});
        expect(typeof result.createdAt).toBe('number');
    })
})