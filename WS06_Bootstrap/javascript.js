document.getElementById("linkki").addEventListener("click", function (event) {
    event.preventDefault();
    const huijausElement = document.getElementById("huijaus");
    huijausElement.classList.remove("alert-success");
    huijausElement.classList.add("alert-danger");
    huijausElement.innerHTML = "Valitettavasti tämä oli huijaus! <a id='huijaus-linkki' href='#' class='alert-link'>Klikkaa tätä</a>";
    document.getElementById("huijaus-linkki").addEventListener("click", function (event) {
        event.preventDefault();
        alert("Tämäkin oli huijaus!");
    });
});
document.getElementById("add-pasi").addEventListener("click", function (event) {
    event.preventDefault();
    const kortitContainer = document.getElementById("kortit");
    const kortti = kortitContainer.children[0];
    const newCard = document.createElement(kortti.tagName);
    newCard.className = kortti.className;
    newCard.style.width = kortti.style.width;
    // newCard.innerHTML = kortti.innerHTML;
    newCard.innerHTML = `
                <img src="tyopajakuva.jpg" class="card-img-top" alt="Card Image">
                <div class="card-body">
                    <h5 class="card-title">tämäkin on kortti</h5>
                    <p class="card-text">tämäkin kortti on Pasi</p>
                    <a id="add-pasi" href="#"
                </div>
            `;
    kortitContainer.appendChild(newCard);
});