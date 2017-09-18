import assert from 'assert';
import useGeneratorAsStateMachine from './generator.statemachine';
import generatorFunc from './generator';

it('generatorFunc logs to console', ()=> {

    const result = useGeneratorAsStateMachine(generatorFunc);

    assert.equal(true, result);
});