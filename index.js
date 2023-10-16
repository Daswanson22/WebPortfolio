$(document).ready(function() {

    $(".nav-link").hover(function() {
        var navItemChanges = {
            "font-weight": "700",
            "color": "black"
        };
        $(this).css(navItemChanges);
    }, function() {
        var navItemChanges = {
            "font-weight": "400",
            "color": "black"
        };
        $(this).css(navItemChanges);
    })

    fillCardInfo();

})

function fillCardInfo() {
    fetch("projects.json").then((res) => {
        return res.json();
    }).then((data) => {
        let cards = data.cards;
        cards.forEach(card => {
            let cardHTML = `<div class="card mb-3" id="${card.ID}">
            <img class="card-img-top" src="${card.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.information}</p>
              <a href="${card.link}" target="_blank" class="btn-green">View Here</a>
            </div>
          </div>`;
            $("#cardContainer").append(cardHTML);
        });

    }).catch(error => console.error("Error fetching JSON", error));
}