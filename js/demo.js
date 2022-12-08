function _hello(val) {
    console.log(`${val}`)
}

function _btnOnCLick() {
    console.log(`CLICKED`)
}

function _printResult(res) {
    console.log(res)
    const container = document.querySelector("#result");
    container.innerHTML = null

    for (let i = 0; i < 100000; i++) {
        const node = document.createElement("div");
        node.innerHTML = res
        container.appendChild(node)
    }

}

let hello = LINKS.kify(_hello);
let btnOnCLick = LINKS.kify(_btnOnCLick);
let printResult = LINKS.kify(_printResult);