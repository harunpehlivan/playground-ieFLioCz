function getDataAsync() {
    return Promise.resolve("Hello World!")
}

//What you do in here will be executed when you hit run
export default function* generatorFunc() {

    let result = yield getDataAsync();
    console.log(result);
}