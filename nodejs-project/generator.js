function getDataAsync() {
    return Promise.resolve("Hello World!")
}

export default function* generatorFunc() {

    let result = yield getDataAsync();
    console.log(result);
}

function useGeneratorAsStateMachine(generatorFunc) {
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
    }
}

useGeneratorAsStateMachine(generatorFunc);