// Get all  DOM elements needed 
let display = document.querySelector('.inp-num')
let btns = document.querySelectorAll('.keys')

// Create a variable to hold key values
let ops = ''

// Loop through al the btns and add and event listener

for (let i= 0; i < btns.length; i++) {
    let btn = btns[i]

    btn.addEventListener('click', () => {
        switch(btn.classList.contains('action')) {
            case true:
                if(btn.classList.contains('operation')) {
                    concatOperation(btn)
                }else {
                    callAction(btn)
                }
                break
            case false:
                concatOperation(btn)
                break 
        }
    })
}

function concatOperation(btn) {
    if(btn.classList.contains('operator')) {
        if(!ops) {
            return
        }
    }
    ops += btn.dataset.value
   display.innerText = ops
}

function callAction(btn) {
    switch(btn.dataset.value) {
        case "calculate":
            display.innerText = eval(ops)
            ops = ''
            break 
        case "clear":
            ops = ''
            display.innerText = '0'
            break 
        case "pos-neg":
            ops *= -1
            break 
        case "%":
            ops /= 100
    }
}

