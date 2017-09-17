import assert from 'assert';
import { getEmployeeId } from './destructure';

it('should return have correct element at start of array', () =>{

    const arrayToExtend = [2, 3, 4];
    
    const expectedFirstElement = 1;
    //Fix me to pass the test
    const updatedArray = [];
    
    console.log(updatedArray);

    assert.equal(updatedArray[0], expectedFirstElement);
});