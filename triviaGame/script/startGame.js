function startClick(){
    //gets input
    const category = document.getElementById("category")?.value;
    const difficulty = document.getElementById("difficulty")?.value;
    const qtype = document.getElementById("qtype")?.value;
    const num = document.getElementById("num")?.value;

    //set inputs for "trasport"
    const score = 0;
    const questionsAnswered = [];
    const info = [category, difficulty, qtype, num, score, questionsAnswered];

    //checks inputs are valid
    for (const [i, v] of info.entries()) {
        if (v === undefined || v === null || v === "") {
            console.log(`fail check at index ${i}`, {category, difficulty, qtype, num});
            return;
        }
    }

    //gets run to save
    let runs = JSON.parse(localStorage.getItem("runs"));
    if (runs === null || Number.isNaN(runs)) runs = 0;

    //saves info and run existense
    const newRunIndex = runs + 1;
    localStorage.setItem(`runCount:${newRunIndex}`, JSON.stringify(info));
    localStorage.setItem(`runs`, JSON.stringify(newRunIndex));

    //enters game
    window.open("game.html");
}