const LOCAL_STORAGE_KEY = "savedOffers";

function updateList(offerId) {
  const listItem = document.getElementById(`offer_${offerId}`);
  listItem.style.backgroundColor = "lightgreen";
}

function addToStore(offerId) {
  const savedOffers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify([...savedOffers, offerId]),
  );
}

function getStore() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

document.addEventListener("click", function (event) {
  const isOfferButton =
    event.target.dataset?.offerId &&
    event.target.dataset?.url?.includes("/go/");
  if (isOfferButton) {
    const offerId = event.target.dataset.offerId;
    updateList(offerId);
    addToStore(offerId);
  }
});

setTimeout(() => {
  getStore().forEach((offerId) => updateList(offerId));
}, 1000);
