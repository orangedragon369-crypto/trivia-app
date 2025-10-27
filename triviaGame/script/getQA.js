async function getApi(api) {
    if (api === null) return;
    try{
        const response = await fetch(api)
        if(!response.ok){
            throw new Error("Could not fetch response");
        }
        const data = await response.json();
        return data;
    }
    catch(error) {console.error(error)};
}

async function getAnswers(details) {
  const info = await getApi(`https://opentdb.com/api.php?amount=${details[3]}&category=${details[0]}&difficulty=${details[1]}&type=${details[2]}`);
  const element = document.getElementById("options");
  element.innerHTML = "";

  info.trivia_categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    element.appendChild(option);
  });
}

let current = () => {
    let runs = JSON.parse(localStorage.getItem("runs"));
    current = JSON.parse(localStorage.getItem(`runCount: ${runs}`));
}

//current() = [category, difficulty, qtype, num, score, questionsAnswered]
getAnswers(current);