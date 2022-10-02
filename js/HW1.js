// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse();   //поверне 3 (третій курс)

//

//Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
//(Потрібно мутувати даний масив, створювати новий не потрібно)

// const products = [
//   {
//     id: 'sku1',
//     qty: 1,
//   },
//   {
//     id: 'sku2',
//     qty: 2,
//   },
//   {
//     id: 'sku3',
//     qty: 3,
//   },
//   {
//     id: 'sku1',
//     qty: 6,
//   },
//   {
//     id: 'sku1',
//     qty: 8,
//   },
//   {
//     id: 'sku2',
//     qty: 19,
//   },
//   {
//     id: 'sku4',
//     qty: 1,
//   },
//   {
//     id: 'sku1',
//     qty: 22,
//   },
// ];

// // const products = [{
// //     id: 'sku1',
// //     qty: 15,
// // }, {
// //     id: 'sku2',
// //     qty: 21,
// // }, {
// //     id: 'sku3',
// //     qty: 3,
// // }, {
// //     id: 'sku4',
// //     qty: 1,
// // },  {
// // }]

// for (let i = 0; i < products.length; i += 1) {
//   let productId = products[i].id;
//   console.log('Search ', productId);
//   for (let k = i + 1; k < products.length; k += 1) {
//     if (productId === products[k].id) {
//       products[i].qty += products[k].qty;
//       products.splice(k, 1);

//       console.log(products);

//       k -= 1;
//     }
//   }
// }

// console.log(products);

// // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // Not found
const people1 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Alex'],
  },
];
// //Not found
const people2 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
];

// // jhon

const people3 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
];

function findNarcise(peoples) {
  const haveNoFriends = peoples.filter((people) => people.know.length === 0);

  if (haveNoFriends.length !== 1) return 'Нарцисів немає';

  const findName = haveNoFriends[0].name;

  const peopleWithout = peoples.filter((people) => people.name !== findName);

  const isTrue = peopleWithout.some(
    (other) => other.know.includes(findName) === true
  );

  return isTrue ? findName : 'Нарцисів немає';
}

console.log(findNarcise(people1));
console.log(findNarcise(people2));
console.log(findNarcise(people3));
