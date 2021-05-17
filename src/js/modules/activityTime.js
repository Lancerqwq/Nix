const avtivityTime = () => {
    (function() {
        window.open('../secondTask.html');
    })();
    
    let time;

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(colseQuestion, 3000);
    }
    
    function colseQuestion() {
        let question = confirm("Ты здесь?");
        if(!question) {
            window.close();
        }
    }
};
export default avtivityTime;