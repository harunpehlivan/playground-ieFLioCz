import assert from 'assert';
import { getEmployeeId } from './destructure';

it('should return employeeId', () =>{

    const employee = { employeeId: 1234, lastName: 'Jones' };

    const expectedValue = getEmployeeId(employee);

    assert.equal(expectedValue, '1234-Jones');
});