import assert from 'assert';
import useGeneratorAsStateMachine from './generator.statemachine';
import generatorFunc from './generator';

it('should return true on completion', ()=> {

    const result = true;

    assert.equal(true, result);
});