function getDataAsync() {
    return Promise.resolve("Hello World!")
}

export default function* generatorFunc() {

    let result = yield getDataAsync();
    console.log(result);
}