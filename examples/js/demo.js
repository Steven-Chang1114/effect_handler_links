function _hello(val) {
    console.log(`${val}`)
}

function _btnOnCLick() {
    console.log(`CLICKED`)
}

function _printResult(res) {
    //console.log(res)
    const container = document.querySelector("#result");
    container.innerHTML = null

    for (let i = 0; i < 150000; i++) {
        const node = document.createElement("div");
        node.innerHTML = res
        container.appendChild(node)
    }

}

function _setInput(res) {
    // console.log(res)
    const input = document.getElementsByTagName('input')[1]
    input.value = res
    //console.log(input)
}

let hello = LINKS.kify(_hello);
let btnOnCLick = LINKS.kify(_btnOnCLick);
let printResult = LINKS.kify(_printResult);
let setInput = LINKS.kify(_setInput);