export default function useGeneratorAsStateMachine(generatorFunc) {
    let generatorObj = generatorFunc();
    moveToNext();

    function moveToNext(asyncResult = undefined) {
        let item = generatorObj.next(asyncResult);
        if (!item.done) {
            // A promise will be our value 
            item.value
                .then(result => moveToNext(result))
                .catch(error => {
                    generatorObj.throw(error);
                });
        }
        
        return true;
    }
}