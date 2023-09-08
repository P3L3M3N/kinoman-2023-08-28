# Критерии

## Дополнительные

#### ⭐️Д1.
Техническое задание реализовано в полном объёме.

Все обязательные и необязательные пункты технического задания выполнены.

## Именование

#### ⭐️Д2.
Переменные носят абстрактные названия и не содержат имён собственных.

⛔️ **Неправильно:**
```JS
const keks = {
  name: `Кекс`
};
```

✅ **Правильно:**
```JS
const cat = {
  name: `Кекс`
};
```

#### ⭐️Д3.
Название методов и свойств объектов не содержит название объектов.

⛔️ **Неправильно:**
```JS
const popup = {
  openPopup() {
    console.log(`I will open popup`);
  }
};
class Wizard {
  constructor(name = `Пендальф`) {
    this.wizardName = name;
  }
}
```

✅ **Правильно:**
```JS
const popup = {
  open() {
    console.log(`I will open popup`);
  }
};
class Wizard {
  constructor(name = `Пендальф`) {
    this.name = name;
  }
}
```

#### ⭐️Д4.
Из названия обработчика события и функции колбэка следует, что это за обработчик.

Для единственного обработчика или функции можно
использовать `callback` или `cb`.Для именования
нескольких обработчиков внутри одного модуля
используется on или handler и описание события.
Название обработчика строится следующим образом:

**on + (на каком элементе) + что случилось:**
```JS
const onSidebarClick = () => { };
const onContentLoad = () => { };
const onResize = () => { };
```
**(на каком элементе) + что случилось + Handler:**
```JS
const sidebarClickHandler = () => { };
const contentLoadHandler = () => { };
const resizeHandler = () => { };
```

## Единообразие

#### ⭐️Д5.
Все функции объявлены единообразно.

При объявлении функций используются только
стрелочные функции.Для объявления методов
объектов используется специальный синтаксис для
методов.Для объявления классов используется
ключевое слово `class`. 

**⛔️ Смешение стилей в рамках проекта не допускается!**

Функция:
```JS
const getTheMeaningOfLive = () => {
  return 42;
};
```
или
```JS
const getTheMeaningOfLive = function () {
  return 42;
};
```

Метод:
```JS
const GOD = {
  createWorld() {
    return `Your world is ready!`;
  }
};
```

Конструктор:
```JS
class Planet {
  constructor(weight, mass) {
    this.weight = weight;
    this.mass = mass;
  }
}
```

**Указания к проверке**
Использование объявления функций через `function` допускается, 
но не рекомендуется, так как все возможные случаи использования
контекстных функций решаются при помощи синтаксиса для методов и классов.

#### ⭐️Д6.
Используется единый стиль именования переменных.

Стиль именования переменных сохраняется во всех модулях, например:
- не следует мешать обработчики содержащие `Handler` и `on`;
- если есть переменные, которые хранят DOM-элемент и содержат слово `Element`, то это
  правило работает везде.

⛔️ **Неправильно:**
```JS
const popupMainElement = document.querySelector(`.popup`);
const sidebarNode = document.querySelector(`.sidebar`);
const similarContainer = popupMainElement.querySelector(`ul.similar`);
```

✅ **Правильно:**:
```JS
const popupMainElement = document.querySelector(`.popup`);
const sidebarElement = document.querySelector(`.sidebar`);
const similarContainerElement = popupMainElement.querySelector(`ul.similar`);
```

#### ⭐️Д7.
При использовании встроенного **API**, который поддерживает несколько 
вариантов использования, используется один способ.

Если существуют несколько разных **API**, позволяющих решить одну и ту же задачу,
например, поиск элемента по `id` в DOM-дереве, то в проекте используется только один из этих **API**.

⛔️ **Неправильно:**
```JS
const popupMainElement = document.querySelector(`#popup`);
const sidebarElement = document.getElementById(`sidebar`);
const popupClassName = popupMainElement.getAttribute(`class`);
const sidebarClassName = sidebarElement.className;
```

✅ **Правильно:**
```JS
const popupMainElement = document.querySelector(`#popup`);
const sidebarElement = document.querySelector(`#sidebar`);
const popupClassName = popupMainElement.getAttribute(`class`);
const sidebarClassName = sidebarElement.getAttribute(`class`);
```
или
```JS
const popupMainElement = document.getElementById(`popup`);
const sidebarElement = document.getElementById(`sidebar`);
const popupClassName = popupMainElement.className;
const sidebarClassName = sidebarElement.className;
```

#### ⭐️Д8.
Методы внутри классов упорядочены.

Во всех классах методы упорядочены следующимобразом:

1. Конструктор.
2. Геттеры и сеттеры свойств класса.
3. Основные методы класса:
- перегруженные методы родительского класса;
- методы класса;
- приватные методы
4. Обработчики событий.
5. Статические методы.

Сортировка основных методов объекта
свободная, подразумевается что методы будут
расположены оптимально для конкретного класса.
Нет смысла ограничивать порядок, потому что он
может меняться в зависимости от особенностей объекта.

## Модульность

#### ⭐️Д9.
В случае, если одинаковый код повторяется в
нескольких модулях, повторяющаяся часть
вынесена в отдельный модуль.

Критерий касается структурных единиц кода —
повторяющийся блок кода либо функции с одним и
теми же конструкциями, например, утилитные
методы для работы с DOM:
```JS
export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer;
};

const main = document.getElementById(`main`);

export const changeView = (view) => {
  main.innerHTML = ``;
  main.appendChild(view.element);
};
```

Не стоит выносить в отдельный модуль одну повторяющуюся инструкцию:
```JS
export const createElement = (template) => {

  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer;
};
```

## Избыточность

#### ⭐️Д10.
В проекте не должно быть избыточных проверок.

Например, если заранее известно, что функция
всегда принимает числовой параметр, то не следует
проверять его на существование.

⛔️ **Неправильно:**
```JS
const isPositiveNumber = (myNumber) => {
  if (typeof myNumber === `undefined`) {
    throw new Error(`Parameter is not defined`);
  }
  return myNumber > 0;
};

isPositiveNumber(15);
isPositiveNumber(-30);
```

✅ **Правильно:**
```JS
const isPositiveNumber = (myNumber) => {
  return myNumber > 0;
};

isPositiveNumber(15);
isPositiveNumber(-30);
```

#### ⭐️Д11.
Отсутствует дублирование кода:
- Повторяющиеся части кода переписаны как функции
  или вынесены из условий.
- При написании кода следует придерживаться
  принципа DRY.

⛔️ **Неправильно:**
```JS
if (this.level >= 10) {
  this.timer.stopTimer();
  this.timer.stopTimeout();
  this.setResult();
  removeTimer();
} 
else if (this.lives <= 0) {
  this.timer.stopTimer();
  this.timer.stopTimeout();
  app.showResultFail();
  removeTimer();
}
```

✅ **Правильно:**
```JS
this.timer.stopTimer();
this.timer.stopTimeout();
if (this.level >= 10) {
  this.setResult();
} 
else if (this.lives <= 0) {
  app.showResultFail();
}
removeTimer();
```

#### ⭐️Д12.
Если при использовании условного оператора в любом случае возвращается значение, альтернативная ветка опускается.

⛔️ **Неправильно:**
```JS
const getValue = (val, anotherVal) => {
  if (2 > 1) {
    return val;
  } else {
    return anotherVal;
  }
};
```

✅ **Правильно:**
```JS
const getValue = (val, anotherVal) => {
  if (2 > 1) {
    return val;
  }
  return anotherVal;
};
```

#### ⭐️Д13.
Отсутствуют лишние приведения и проверки типов.
Если заранее известно, что в переменной число, то
нет смысла превращать переменную в
число `parseInt(myNumber)`.То же касается и
избыточной проверки булевой переменной.

⛔️ **Неправильно:**
```JS
if (booleanValue === true) {
  console.log(`It\`s true!`);
}
```

✅ **Правильно:**
```JS
if (booleanValue) {
  console.log(`It\`s true!`);
}
```

#### ⭐️Д14.
Там, где возможно, в присвоении значения вместо `if` используется тернарный оператор.

⛔️ **Неправильно:**
```JS
let sex;
if (male) {
  sex = `Мужчина`;
} 
else {
  sex = `Женщина`;
}
```

✅ **Правильно:**
```JS
const sex = male ? `Мужчина` : `Женщина`;
```

#### ⭐️Д15.
Условия упрощены.

Если функция возвращает булево значение, не используется `if..else` с лишними `return`.
⛔️ **Неправильно:**
```JS
if..else
  ((firstValue, secondValue) => {

    if (firstValue === secondValue) {
      return true;
    } else {
      return false;
    }
  });
```

✅ **Правильно:**
```JS
((firstValue, secondValue) => {
  return firstValue === secondValue;
});
```

## Оптимальность

#### ⭐️Д16.
Значения не конвертируются в строку и обратно без необходимости.

Если состояние переменной можно сохранить в
переменную или во внутреннее свойство, то лучше
использовать внутреннее состояние объекта,
вместо сериализации из значения в строку и наоборот.

⛔️ **Неправильно:**
```JS
  class Timer {
    setTime({ minutes, seconds }) {
      document.querySelector(`.timer-value-mins`).textContent = minutes;
      document.querySelector(`.timer-value-secs`).textContent = seconds;
    }
    getTime() {
      const minutes =
        parseInt(document.querySelector(`.timer-value-mins`).textContent, 10);
      const seconds =
        parseInt(document.querySelector(`.timer-value-secs`).textContent, 10);
      return { minutes, seconds };
    }
  }
```

✅ **Правильно:**:
```JS
class Timer {
  constructor(time) {
    this.minutesEl = document.querySelector(`.timer-value-mins`);
    this.secondsEl = document.querySelector(`.timer-value-secs`);
    this.time = time;
  }
  update() {
    this.minutesEl.textContent = this.time.minutes;
    this.secondsEl.textContent = this.time.seconds;
  }
  get time() {
    return this.myTime;
  }
  set time(time) {
    this.myTime = time;
    this.update();
  }
}
```

#### ⭐️Д17.
Константы, используемые внутри функций, создаются вне 
функций и используются повторно через замыкания.

#### ⭐️Д18.
Поиск элементов по селекторам делается минимальное 
количество раз, после этого ссылки на элементы сохраняются.

⛔️ **Неправильно:**
```JS
for (let i = 0; i <
  Math.min(apartments.length, 3); i++) {
  const dialog = document.querySelector(`.dialog`);
  render(dialog, apartments[i]);
}
```

✅ **Правильно:**:
```JS
const dialog = document.querySelector(`.dialog`);
for (let i = 0; i <
  Math.min(apartments.length, 3); i++) {
  render(dialog, apartments[i]);
}
```

#### ⭐️Д19.
Массивы и объекты, содержимое которых вычисляется, 
собираются один раз, а после этого только переиспользуются.

#### ⭐️Д20.
Для итерирования по массивам и структурам данных, по которому можно итерироваться,
**(Iterable)** используется конструкция `for ..of`.
Там, где не требуется индекс элемента массива или
нужно обойти все элементы итерируемой структуры
данных, используется цикл `for ..of` вместо
цикла `for`.
⛔️ **Неправильно:**
```JS
for (let i = 0; i < levels.length; i++) {

  const level = levels[i];
  renderLevel(level);
}
```

✅ **Правильно:**:
```JS
for (const level of levels) {
  renderLevel(level);
}
```

#### ⭐️Д21.
Изменения применяются точечно.

Например, при удалении классов с DOM-элемента,
не производится попытка удалить все возможные
классы, если можно убрать лишь тот, который
действительно установлен на DOM - элементе в
данный момент

⛔️ **Неправильно:**
```JS
const imageContainer = document.querySelector(`.image-container`);
const changeFilter = (filterName) => {
  imageContainer.classList.remove(`filter-chrome`, `filter-sepia`, `filter-marvin`, `filter-phobos`, `filter-heat`);
  imageContainer.classList.add(filterName);
};
```

✅ **Правильно:**
```JS
const imageContainer = document.querySelector(`.image-container`);

let currentFilter;
const changeFilter = (filterName) => {
  if (currentFilter) {
    imageContainer.classList.remove(currentFilter)
      ;
  }
  imageContainer.classList.add(filterName);
  currentFilter = filterName;
};
```

## Сложность и читаемость 

#### ⭐️Д22.
Для каждого события используется отдельный обработчик.

Одна функция не является обработчиком нескольких разных событий.

#### ⭐️Д23.

Длинные функции и методы разбиты на несколько небольших.

#### ⭐️Д24.
Для работы с JS - коллекциями используются итераторы для массивов.

Итераторы используются для трансформаций массивов — 
`map`, `filter`, `sort` и прочие.А также дляобхода проблемы 
потери окружения в циклах — `forEach`.

**Например:**
```JS
elements.forEach((el) => {
  el.onclick = () => {
    console.log(el);
  };
});
```

#### ⭐️Д25.
Оператор присваивания не используется как часть выражения.

⛔️ **Неправильно:**
```JS
imgGenerate(picArray = JSON.parse(images));
```

✅ **Правильно:**
```JS
picArray = JSON.parse(images);
imgGenerate(picArray);
```

#### ⭐️Д26.
Операции над DOM-элементами инкапсулированы.
Все операции над элементами DOM-дерева
происходят только там, где эти элементы были
созданы, и не используются снаружи.

Например, всё, что связано с отрисовкой данных, должно
находиться внутри класса `View` и управляться
только внутри этого класса.

Любой доступ к закрытым данным снаружи запрещён.

⛔️ **Неправильно:**
```JS
class PlayerController {
  constructor(view) {
    this.view = view;
  }
  init() {
    const checkboxes = Array.from(this.view.element.querySelectorAll(`input`));
    const answers = [];
    this.view.makeDecision = () => {
      answers.push(checkboxes.filter((it) =>
        it.checked));
      if (answers.length > 0) {
        goToNextScreen();
      }
    };
  }
}
```

✅ **Правильно:**
```JS
class PlayerController {
  constructor(view) {
    this.view = view;
  }
  init() {
    this.view.onAnswer = (answers) => {
      if (answers.length > 0) {
        goToNextScreen();
      }
    };
  }
}
```
