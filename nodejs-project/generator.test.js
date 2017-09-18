import assert from 'assert';
import useGeneratorAsStateMachine from './generator.statemachine';
import generatorFunc from './generator';

it('should return true on completion', ()=> {

    const result = useGeneratorAsStateMachine(generatorFunc);

    assert.equal(true, result);
});