// // // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // // name приватна властивість (ім'я, успадковується від User),
// // // surname приватна властивість (прізвище, успадковується від User),
// // // year (рік вступу до вузу).
// // // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // // Приклад ініціалізації екземпляру класа:
// // // const student = new Student('Петрик', 'Пяточкин', 2019);

// // // student.getFullName(); //поверне 'Петрик Пяточкин'
// // // student.getCourse();   //поверне 3 (третій курс)

// // //

// // //Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
// // //(Потрібно мутувати даний масив, створювати новий не потрібно)

// // // const products = [
// // //   {
// // //     id: 'sku1',
// // //     qty: 1,
// // //   },
// // //   {
// // //     id: 'sku2',
// // //     qty: 2,
// // //   },
// // //   {
// // //     id: 'sku3',
// // //     qty: 3,
// // //   },
// // //   {
// // //     id: 'sku1',
// // //     qty: 6,
// // //   },
// // //   {
// // //     id: 'sku1',
// // //     qty: 8,
// // //   },
// // //   {
// // //     id: 'sku2',
// // //     qty: 19,
// // //   },
// // //   {
// // //     id: 'sku4',
// // //     qty: 1,
// // //   },
// // //   {
// // //     id: 'sku1',
// // //     qty: 22,
// // //   },
// // // ];

// // // // const products = [{
// // // //     id: 'sku1',
// // // //     qty: 15,
// // // // }, {
// // // //     id: 'sku2',
// // // //     qty: 21,
// // // // }, {
// // // //     id: 'sku3',
// // // //     qty: 3,
// // // // }, {
// // // //     id: 'sku4',
// // // //     qty: 1,
// // // // },  {
// // // // }]

// // // for (let i = 0; i < products.length; i += 1) {
// // //   let productId = products[i].id;
// // //   console.log('Search ', productId);
// // //   for (let k = i + 1; k < products.length; k += 1) {
// // //     if (productId === products[k].id) {
// // //       products[i].qty += products[k].qty;
// // //       products.splice(k, 1);

// // //       console.log(products);

// // //       k -= 1;
// // //     }
// // //   }
// // // }

// // // console.log(products);

// // // // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // // // Not found
// // const people1 = [
// //   {
// //     name: 'Alex',
// //     know: ['Eva', 'Jhon'],
// //   },
// //   {
// //     name: 'Ivan',
// //     know: ['Jhon', 'Alex'],
// //   },
// //   {
// //     name: 'Eva',
// //     know: ['Alex', 'Jhon'],
// //   },
// //   {
// //     name: 'Jhon',
// //     know: ['Alex'],
// //   },
// // ];
// // // //Not found
// // const people2 = [
// //   {
// //     name: 'Alex',
// //     know: ['Eva', 'Jhon'],
// //   },
// //   {
// //     name: 'Jhon',
// //     know: [],
// //   },
// //   {
// //     name: 'Eva',
// //     know: [],
// //   },
// //   {
// //     name: 'Ivan',
// //     know: ['Jhon', 'Alex'],
// //   },
// // ];

// // // // jhon

// // const people3 = [
// //   {
// //     name: 'Alex',
// //     know: ['Eva', 'Jhon'],
// //   },
// //   {
// //     name: 'Jhon',
// //     know: [],
// //   },
// //   {
// //     name: 'Eva',
// //     know: ['Alex', 'Jhon'],
// //   },
// //   {
// //     name: 'Ivan',
// //     know: ['Jhon', 'Alex'],
// //   },
// // ];

// // function findNarcise(peoples) {
// //   const haveNoFriends = peoples.filter((people) => people.know.length === 0);

// //   if (haveNoFriends.length !== 1) return 'Нарцисів немає';

// //   const findName = haveNoFriends[0].name;

// //   const peopleWithout = peoples.filter((people) => people.name !== findName);

// //   const isTrue = peopleWithout.every(
// //     (other) => other.know.includes(findName) === true
// //   );

// //   return isTrue ? findName : 'Нарцисів немає';
// // }

// // console.log(findNarcise(people1));
// // console.log(findNarcise(people2));
// // console.log(findNarcise(people3));

// const cars = [
//   {
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
//   {
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// function nbYear(p0, percent, aug, p) {
// 	let years = 0;
// 	let pCurrent = p0;
//   for (
//     pCurrent < p;
//     pCurrent += (p0 * percent) / 100 + aug
//   ) {
//     years += 1;
//   }
//   return years;
// }

// console.log(nbYear(1500, 5, 100, 5000));

// class User {
//   static amount = 0;
//   static plusOne() {
//     this.amount += 1;
//     console.log('Amount: ', this.amount);
//   }

//   constructor(name) {
//     this.name = name;
//     User.plusOne();
//   }
// }

// const user1 = new User();
// const user2 = new User();
// const user3 = new User();
// console.log('User: ', user1.constructor.amount);

// e.textContent = (valueX.includes(currentId) ? 'X' : '') + (valueY.includes(currentId) ? '0':'';

const getEl = (s) => document.querySelector(s);

const content = getEl('.content');
const playerFirstRef = getEl('.player_first');
const playerSecondRef = getEl('.player_second');
const btnRestart = getEl('.restart');
const form = getEl('.login-form');

let markup = '';
let player = 'X';

let valueX = JSON.parse(localStorage.getItem('X')) || [];
let valueY = JSON.parse(localStorage.getItem('0')) || [];

let firstP = localStorage.getItem('playerFirst') || '';
let secondP = localStorage.getItem('playerSecond') || '';
playerFirstRef.textContent = firstP;
playerSecondRef.textContent = secondP;

for (let i = 1; i <= 9; i += 1) {
  markup += `<div class=“item” data-id='${i}'></div>`;
}
content.insertAdjacentHTML('beforeend', markup);
Array.from(content.children).forEach((e) => {
  console.log(e);
  const currentId = e.dataset.id;
  if (valueX.includes(currentId)) {
    e.textContent = 'X';
  } else if (valueY.includes(currentId)) {
    e.textContent = '0';
  }
});

form.addEventListener('submit', formOnClick);
function formOnClick(evt) {
  evt.preventDefault();
  const { first, second } = evt.currentTarget.elements;
  playerFirstRef.textContent = first.value;
  playerSecondRef.textContent = second.value;
  localStorage.setItem('playerFirst', first.value);
  localStorage.setItem('playerSecond', second.value);
  form.reset();
  form.style.display = 'none';
}

content.addEventListener('click', play);
function play(evt) {
  if (!evt.target.textContent) {
    evt.target.textContent = player;
  } else {
    alert('Зайнято!');
    return;
  }
  const currentId = evt.target.dataset.id;
  if (player === 'X') {
    player = '0';
    valueX.push(currentId);
    localStorage.setItem('X', JSON.stringify(valueX));
  } else {
    player = 'X';
    valueY.push(currentId);
    localStorage.setItem('0', JSON.stringify(valueY));
  }
  playerFirstRef.classList.toggle('active');
  playerSecondRef.classList.toggle('active');
}

btnRestart.addEventListener('click', onClickRestart);
function onClickRestart() {
  form.style.display = 'flex';
  playerFirstRef.textContent = '';
  playerSecondRef.textContent = '';
  content.innerHTML = markup;
  player = 'X';
  playerFirstRef.classList.add('active');
  playerSecondRef.classList.remove('active');
  localStorage.clear();
  valueX = [];
  valueY = [];
}
