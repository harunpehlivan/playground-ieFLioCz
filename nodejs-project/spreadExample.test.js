import assert from 'assert';
import { getEmployeeId } from './destructure';

it('should return have correct element at start of array', () =>{

    const arrayToExtend = [2, 3, 4];
    
    const expectedFirstElement = 1;

    const updatedArray = [];
    
    assert.equal(updatedArray[0], expectedFirstElement);
});