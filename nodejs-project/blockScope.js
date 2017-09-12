export function blockScopeLet(input) {

    let outerValue = input;

    if (typeof input !== 'undefined') {

        let outerValue = 20;
    }

    return outerValue;
}

export function functionScopedVar(input) {

    var outerValue = input;

    if (typeof input !== 'undefined') {

        var outerValue = 20;
    }

    return outerValue;
}