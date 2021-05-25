document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter')
    const pauseBttn = document.getElementById('pause')

    let start = setInterval(startCounterOnLoad, 1000)
    pauseBttn.addEventListener('click', pauseAndResumeTimer)

    // this function starts the timer upon DOMContentLoaded and increments the timer one second at a time
    function startCounterOnLoad() { 
        counter.innerText = parseInt(counter.innerText) + 1
    }

    // this function will be able to pause the timer and change the button between "pause" and "resume"
    function pauseAndResumeTimer() {
        if (pauseBttn.innerText === "pause") {
            let start = parseInt(counter.innerText)
            clearInterval(start)
            pauseBttn.innerText = "resume"
            console.log("counter paused")
        }
        else {
            setInterval(startCounterOnLoad, 1000)
            pauseBttn.innerText = "pause"
            console.log("counter resumed")
        }
    }

})