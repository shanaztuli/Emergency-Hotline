function getId(id) {
  const element = document.getElementById(id);
  return element;
}
function getClassName(className) {
  const elements = document.getElementsByClassName(className);
  return elements;
}
// **********
const cardHeart = getClassName("card-heart");
for (let heart of cardHeart) {
  heart.addEventListener("click", function () {
    const countHeart = getId("count-heart").innerText;
    const countHeartTotal = Number(countHeart) + 1;
    getId("count-heart").innerText = countHeartTotal;
  });
}
//
getId("cards-parent").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-call")) {
    const cardCallButton = e.target;
    const serviceName =
      cardCallButton.parentNode.parentNode.children[1].innerText;
    const callNumber =
      cardCallButton.parentNode.parentNode.children[3].innerText;
    const date = new Date().toLocaleTimeString();
    const coins = getId("coin").innerText;
    if (coins < 20) {
      alert("Your Balance is Low,You can not make a call.");
      return;
    }
    alert(
      "you called the " + serviceName + ".The Calling Number is " + callNumber
    );

    const chargeCoins = Number(coins) - 20;
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

getId('"btn-clear"');
