//functions
function getId(id) {
  const element = document.getElementById(id);
  return element;
}
function getClassName(className) {
  const elements = document.getElementsByClassName(className);
  return elements;
}
// cardHeart section
const cardHeart = getClassName("card-heart");
for (let heart of cardHeart) {
  heart.addEventListener("click", function () {
    const countHeart = getId("count-heart").innerText;
    const countHeartTotal = Number(countHeart) + 1;
    getId("count-heart").innerText = countHeartTotal;
  });
}

// cards section
getId("cards-parent").addEventListener("click", function (e) {
  const cardCallButton = e.target.closest(".btn-call");
  if (cardCallButton) {
    const card = cardCallButton.closest(".shadow");
    const serviceName = card.querySelector(".card-title").innerText;
    const callNumber = card.querySelector(".call-number").innerText;
    const date = new Date().toLocaleTimeString();
    const coins = Number(getId("coin").innerText);
    if (coins < 20) {
      alert(" ❌Your Balance is Low,You can not make a call.");
      return;
    }
    alert(" 📞Calling " + serviceName + " " + callNumber);

    const chargeCoins = coins - 20;
    getId("coin").innerText = chargeCoins;

    //
    const callHistoryCards = getId("call-history-cards");
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div
                class="card flex flex-row justify-between items-center bg-gray-200 p-2 mb-3"
              >
                <div>
                  <h1 class="font-semibold">${serviceName}</h1>
                  <p class="text-gray-500">${callNumber}</p>
                </div>
                <p class="text-gray-500">${date}</p>
              </div>
    `;
    callHistoryCards.append(newCard);
  }
});
//clear section
getId("btn-clear").addEventListener("click", function () {
  const callHistoryCards = getId("call-history-cards");
  callHistoryCards.innerHTML = "";
});

// //copy section
const btnCopy = getClassName("btn-copy");
for (let copy of btnCopy) {
  copy.addEventListener("click", function () {
    const card = copy.closest(".shadow");
    const callNumber = card.querySelector(".call-number").innerText;

    navigator.clipboard.writeText(callNumber);
    alert("You copied the service number: " + callNumber);

    const countCopy = getId("count-copy").innerText;
    const countCopyTotal = Number(countCopy) + 1;
    getId("count-copy").innerText = countCopyTotal;
  });
}
