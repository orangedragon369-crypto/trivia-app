function setHeader(){
    const head = document.getElementById("header");
    head.innerHTML = `
        <div class="cont fill">
            <div><a class="link" href="index.html">Home</a></div>
            <div><a class="link" href="stats.html">Stats</a></div>
        </div>`;
    head.classList.add("header")
};

setHeader();