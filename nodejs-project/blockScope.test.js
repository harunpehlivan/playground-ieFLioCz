import assert from 'assert';
import { blockScopeLet, functionScopedVar } from './blockScope';

it('blockScopeLet should return 100 with input of 100', () =>{

    const input = 100;

    const result = blockScopeLet(input);

    assert.equal(result, input);
});

it('functionScopedVar should return innerValue with input of 100', () =>{

    const input = 100;

    const result = functionScopedVar(input);

    assert.notEqual(result, input);
});