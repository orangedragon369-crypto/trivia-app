function checkQA () {
    const result = document.getElementById("rSlashW");
    result.classList.remove("red, green");

    const answer = querySelector('input[name="answer"]:checked');
    let correct = 1;
    
    if (answer === correct) {
        result.classList.add("green");
    } else {result.classList.add("red")}
}
