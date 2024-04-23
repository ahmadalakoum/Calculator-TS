var resultInput = document.getElementById('result');
function addToResult(char) {
    resultInput.value += char;
}
function clearResult() {
    resultInput.value = '';
}
function calculate() {
    try {
        resultInput.value = eval(resultInput.value);
    }
    catch (error) {
        resultInput.value = 'error';
    }
}
