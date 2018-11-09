const serviceList = document.querySelector('[data-list1]');
const investList = document.querySelector('[data-list2]');
const insureList = document.querySelector('[data-list3]');
const taxServices = document.querySelector('[data-ts]');
const taxPar = document.querySelector('[data-ts-p]');
const serviceItems = [];

for (item of serviceList.children) {
  serviceItems.push(item);
}

console.log(insureList);
serviceItems.push(investList);
serviceItems.push(insureList);
serviceItems.push(taxServices);

// for (item of insureList) {
//   serviceItems.push(item)
// }

// service items.onclick event
for (item of serviceItems) {
  item.addEventListener('click', (event) => {
    console.log('clicked');
    event.target.firstElementChild.classList.toggle('info-hidden');
  })
}



