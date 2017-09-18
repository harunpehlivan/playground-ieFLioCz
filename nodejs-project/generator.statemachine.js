export default function useGeneratorAsStateMachine(generatorFunc) {
    let generatorObj = generatorFunc();
    moveToNextState();

    function moveToNextState(asyncResult = undefined) {
        let item = generatorObj.next(asyncResult);
        
        if (!item.done) {
            // A promise will be our value 
            item.value
                .then(result => moveToNextState(result))
                .catch(error => {
                    generatorObj.throw(error);
                });
        }
    }    
    return true;
}