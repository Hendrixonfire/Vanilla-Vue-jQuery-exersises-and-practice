// Урок 2: Компоненты во VueJS

// В уроке 2 мы поговорим о компонентах во VueJS, которые являются ключевым понятием этой фреймворка. 
// Компоненты позволяют создавать переиспользуемые и модульные элементы пользовательского интерфейса, что делает разработку приложений более эффективной.

// 1) Структура компонента

// Компонент во VueJS представляет собой независимую и самодостаточную единицу, которая объединяет HTML-шаблон, логику JavaScript и стили CSS. 
// Обычно компоненты организуются в иерархическую структуру, где каждый компонент может содержать в себе другие компоненты.

// Структура компонента включает в себя:

// Шаблон (template): Определяет разметку компонента, используя синтаксис HTML или директивы Vue.
// Скрипт (script): Содержит логику компонента, включая данные, методы и вычисляемые свойства.
// Стили (style): Определяют внешний вид компонента с помощью CSS правил.
// Пример структуры компонента выглядит следующим образом:


// <template>
//   <!-- Шаблон компонента -->
// </template>

// <script>
// export default {
//   // Логика компонента
// }
// </script>

// <style>
// /* Стили компонента */
// </style>

// 2) Входящие данные: props

// Компоненты могут принимать данные из внешнего контекста, передаваемые через атрибуты. В VueJS эти данные называются "props". 
// Props позволяют передавать значения от родительского компонента дочернему компоненту.

// Пример использования props в компоненте:

// <template>
//   <div>
//     <h2>{{ title }}</h2>
//     <p>{{ description }}</p>
//   </div>
// </template>

// <script>
// export default {
//   props: {
//     title: String,
//     description: {
//       type: String,
//       required: true
//     }
//   }
// }
// </script>
// В этом примере компонент ожидает два props: title и description. Props могут иметь определенные типы данных и дополнительные ограничения.
//  В данном случае title должен быть строкой, а description - обязательным параметром, так как установлено значение required: true.

// 3) События компонента: $emit

// Компоненты могут также взаимодействовать с родительским компонентом через события.
//  Внутри компонента можно объявить событие с помощью $emit и передать данные родительскому компоненту.

// Пример использования $emit для создания и передачи события:


// <template>
//   <button @click="handleClick">Нажми меня</button>
// </template>

// <script>
// export default {
//   methods: {
//     handleClick() {
//       this.$emit('button-clicked', 'Данные, передаваемые через событие');
//     }
//   }
// }
// </script>
// В этом примере при клике на кнопку событие 'button-clicked' будет передано родительскому компоненту, и вместе с ним будут переданы данные 'Данные, передаваемые через событие'.

// 4) Значения по умолчанию для props

// В некоторых случаях может быть полезно установить значения по умолчанию для props, если они не были переданы из родительского компонента. 
// Это можно сделать с помощью свойства default при определении props.

// Пример установки значения по умолчанию для prop:


// <template>
//   <div>{{ message }}</div>
// </template>

// <script>
// export default {
//   props: {
//     message: {
//       type: String,
//       default: 'Привет, мир!'
//     }
//   }
// }
// </script>
// В этом примере, если родительский компонент не передает значение для message, то будет отображено значение по умолчанию 'Привет, мир!'.

// 5) Составные компоненты

// Составные компоненты во VueJS позволяют объединять несколько компонентов в один, чтобы создавать более сложные и мощные пользовательские интерфейсы.
//  Это особенно полезно в случаях, когда один и тот же компонент используется в нескольких местах приложения.

// Пример использования составного компонента:


// <template>
//   <div>
//     <h2>{{ title }}</h2>
//     <my-button @button-clicked="handleButtonClick">Нажми меня</my-button>
//   </div>
// </template>

// <script>
// import MyButton from './MyButton.vue';

// export default {
//   components: {
//     'my-button': MyButton
//   },
//   data() {
//     return {
//       title: 'Пример составного компонента'
//     }
//   },
//   methods: {
//     handleButtonClick() {
//       // Обработка события нажатия кнопки
//     }
//   }
// }
// </script>
// В этом примере используется составной компонент, включающий в себя компонент MyButton.
//  Компонент MyButton будет отображаться с помощью тега <my-button>, и он может взаимодействовать с родительским компонентом через события.

// 6) Распределение зон ответственности между компонентами

// Одним из важных аспектов при разработке приложений с использованием компонентов во VueJS является правильное распределение зон ответственности между компонентами.
//  Каждый компонент должен быть ответственным только за свою собственную функциональность и иметь четкое определение своей задачи.

// Хорошая практика включает разделение компонентов на маленькие, многоразовые и легко тестируемые блоки. 
// Каждый компонент должен решать конкретную задачу и быть независимым от других компонентов.

// 7) Mixins

// Mixins во VueJS позволяют повторно использовать код между несколькими компонентами. Это полезно, когда несколько компонентов имеют общую функциональность или методы.

// Пример использования Mixins:


// // mixin.js
// export default {
//   methods: {
//     logMessage(message) {
//       console.log('Сообщение:', message);
//     }
//   }
// }

// // MyComponent.vue
// <template>
//   <div>
//     <button @click="logMessage('Привет!')">Нажми меня</button>
//   </div>
// </template>

// <script>
// import mixin from './mixin.js';

// export default {
//   mixins: [mixin]
// }
// </script>
// В этом примере метод logMessage из mixin.js будет доступен в компоненте MyComponent благодаря использованию миксина.

// 8) Однофайловые компоненты

// Однофайловые компоненты (Single-File Components) являются предпочтительным способом организации кода во VueJS.
// Вместо разделения шаблона, логики и стилей по разным файлам, все они объединяются в одном файле с расширением .vue.

// Пример однофайлового компонента:


// <template>
//   <div>
//     <h2>{{ title }}</h2>
//     <p>{{ message }}</p>
//   </div>
// </template>

// <script>
// export default {
//   data() {
//     return {
//       title: 'Пример однофайлового компонента',
//       message: 'Привет, Vue!'
//     }
//   }
// }
// </script>

// <style>
// h2 {
//   color: blue;
// }
// </style>
// В этом примере шаблон, логика и стили компонента находятся в одном файле .vue, что делает его более легким для чтения и поддержки.

// 9) Приложение "Список дел"

// В качестве практического примера мы создадим простое приложение "Список дел", используя компоненты во VueJS. 
// Приложение будет состоять из компонентов для отображения списка дел, добавления нового дела и удаления дела.

// Для реализации этого приложения вам понадобятся следующие компоненты:

// TodoList.vue: Компонент для отображения списка дел.
// AddTodo.vue: Компонент для добавления нового дела.
// TodoItem.vue: Компонент для отображения отдельного элемента списка дел.
// Вы можете создать каждый из этих компонентов в отдельных файлах с расширением .vue и объединить их в главном файле приложения.


// Задача 1: Директивы в VueJS

// Создайте компонент "Калькулятор" (Calculator), который будет иметь два поля ввода для чисел и кнопку "Посчитать". 
// При нажатии на кнопку, компонент должен выводить сумму введенных чисел.




// <template>
//   <div>
//     <input type="number" v-model="number1" placeholder="Введите число 1">
//     <input type="number" v-model="number2" placeholder="Введите число 2">
//     <button @click="calculateSum">Посчитать</button>
//     <p>Сумма: {{ sum }}</p>
//   </div>
// </template>

// <script>
// export default {
//   data() {
//     return {
//       number1: 0,
//       number2: 0,
//       sum: 0
//     }
//   },
//   methods: {
//     calculateSum() {
//       this.sum = parseInt(this.number1) + parseInt(this.number2);
//     }
//   }
// }
// </script>

// Комментарий:
// В этой задаче мы используем директиву v-model, которая обеспечивает двустороннюю привязку данных. 
// Она связывает значения полей ввода (number1 и number2) с данными в компоненте и автоматически обновляет значения при их изменении.

// При нажатии на кнопку "Посчитать" вызывается метод calculateSum, который складывает значения number1 и number2 и сохраняет результат в переменной sum. 
// Затем значение sum отображается в шаблоне.

// Задача 2: Компоненты и передача данных через props

// Создайте компонент "Список товаров" (ProductList), который будет отображать список товаров, переданный из родительского компонента.
//  Каждый товар должен быть представлен отдельным компонентом "Товар" (Product), который будет отображать название и цену товара.




// <!-- Product.vue -->
// <template>
//   <div>
//     <h3>{{ name }}</h3>
//     <p>Цена: {{ price }}</p>
//   </div>
// </template>

// <script>
// export default {
//   props: {
//     name: String,
//     price: Number
//   }
// }
// </script>

// <!-- ProductList.vue -->
// <template>
//   <div>
//     <h2>Список товаров</h2>
//     <Product v-for="product in products" :key="product.id" :name="product.name" :price="product.price" />
//   </div>
// </template>

// <script>
// import Product from './Product.vue';

// export default {
//   components: {
//     Product
//   },
//   data() {
//     return {
//       products: [
//         { id: 1, name: 'Товар 1', price: 10 },
//         { id: 2, name: 'Товар 2', price: 20 },
//         { id: 3, name: 'Товар 3', price: 30 }
//       ]
//     }
//   }
// }
// </script>

// Комментарий:
// В этой задаче мы создаем компонент "Товар" (Product), который принимает два props: name и price. Он отображает название товара и его цену.

// Затем мы создаем компонент "Список товаров" (ProductList), который в цикле v-for перебирает массив products и создает экземпляры компонента "Товар" для каждого товара. 
// Мы передаем данные каждого товара через props name и price.

// Обратите внимание, что мы используем :key="product.id" для уникальной идентификации каждого компонента "Товар" в списке. Это важно для оптимальной работы VueJS.

// Задача 3: Обработка событий и передача данных через $emit

// Расширьте предыдущую задачу "Список товаров", чтобы каждый компонент "Товар" (Product) имел кнопку "Добавить в корзину". 
// При клике на кнопку должно генерироваться событие, которое передает информацию о выбранном товаре в родительский компонент "Список товаров" (ProductList).




// <!-- Product.vue -->
// <template>
//   <div>
//     <h3>{{ name }}</h3>
//     <p>Цена: {{ price }}</p>
//     <button @click="addToCart">Добавить в корзину</button>
//   </div>
// </template>

// <script>
// export default {
//   props: {
//     name: String,
//     price: Number
//   },
//   methods: {
//     addToCart() {
//       this.$emit('add-to-cart', { name: this.name, price: this.price });
//     }
//   }
// }
// </script>

// <!-- ProductList.vue -->
// <template>
//   <div>
//     <h2>Список товаров</h2>
//     <Product v-for="product in products" :key="product.id" :name="product.name" :price="product.price" @add-to-cart="handleAddToCart" />
//     <h3>Корзина:</h3>
//     <ul>
//       <li v-for="item in cartItems" :key="item.name">{{ item.name }} - {{ item.price }}</li>
//     </ul>
//   </div>
// </template>

// <script>
// import Product from './Product.vue';

// export default {
//   components: {
//     Product
//   },
//   data() {
//     return {
//       products: [
//         { id: 1, name: 'Товар 1', price: 10 },
//         { id: 2, name: 'Товар 2', price: 20 },
//         { id: 3, name: 'Товар 3', price: 30 }
//       ],
//       cartItems: []
//     }
//   },
//   methods: {
//     handleAddToCart(product) {
//       this.cartItems.push(product);
//     }
//   }
// }
// </script>

// Комментарий:
// В этой задаче мы добавляем кнопку "Добавить в корзину" в компонент "Товар" (Product). 
// При клике на кнопку генерируется событие add-to-cart, которое передает объект с информацией о товаре в родительский компонент "Список товаров" (ProductList).

// В компоненте "Список товаров" мы обрабатываем событие add-to-cart с помощью метода handleAddToCart. 
// В этом методе мы добавляем выбранный товар в массив cartItems, который представляет корзину.

// Затем мы отображаем содержимое корзины с помощью цикла v-for внутри списка ul.

// Эти задачи позволят вам практически отработать материал второго урока по VueJS, включая директивы, работу с props и событиями компонентов.
//  Решения задач содержат комментарии, которые объясняют основные концепции и использование различных функциональностей VueJS.





// Задача: Приложение "Список дел"

// В этой задаче вам предлагается создать приложение "Список дел" с использованием компонентов во VueJS. 
// Приложение должно позволять пользователю добавлять, удалять и отмечать выполненные дела.

// Шаги реализации:

// Шаг 1: Создайте компонент "Список дел" (TodoList), который будет отображать список дел.
//  Этот компонент будет иметь массив для хранения дел и методы для добавления, удаления и отметки выполненных дел.


// <template>
//   <div>
//     <h2>Список дел</h2>
//     <ul>
//       <li v-for="todo in todos" :key="todo.id" :class="{ 'completed': todo.completed }">
//         {{ todo.text }}
//         <button @click="deleteTodo(todo.id)">Удалить</button>
//         <input type="checkbox" v-model="todo.completed"> Выполнено
//       </li>
//     </ul>
//     <form @submit.prevent="addTodo">
//       <input type="text" v-model="newTodo" placeholder="Введите новое дело">
//       <button type="submit">Добавить</button>
//     </form>
//   </div>
// </template>

// <script>
// export default {
//   data() {
//     return {
//       todos: [],
//       newTodo: ''
//     }
//   },
//   methods: {
//     addTodo() {
//       if (this.newTodo.trim() !== '') {
//         this.todos.push({
//           id: Date.now(),
//           text: this.newTodo,
//           completed: false
//         });
//         this.newTodo = '';
//       }
//     },
//     deleteTodo(todoId) {
//       this.todos = this.todos.filter(todo => todo.id !== todoId);
//     }
//   }
// }
// </script>

// <style>
// .completed {
//   text-decoration: line-through;
// }
// </style>
// {/* Шаг 2: Создайте главный компонент приложения (App), который будет содержать компонент "Список дел" (TodoList). */}


// <template>
//   <div>
//     <h1>Приложение "Список дел"</h1>
//     <TodoList />
//   </div>
// </template>

// <script>
// import TodoList from './TodoList.vue';

// export default {
//   components: {
//     TodoList
//   }
// }
// </script>

// Шаг 3: Создайте файлы "TodoList.vue" и "App.vue" в соответствии с шагами 1 и 2.

// Комментарий:
// В данном решении мы создаем компонент "Список дел" (TodoList), который содержит список дел в массиве todos и поле newTodo для ввода нового дела. 
// Метод addTodo добавляет новое дело в массив todos, если поле newTodo не пустое. Метод deleteTodo удаляет дело из массива todos по его идентификатору.

// Мы также использовали директиву v-for для отображения списка дел и v-model для связи поля ввода с данными в компоненте.

// В главном компоненте (App) мы просто импортировали и зарегистрировали компонент "Список дел" (TodoList).

// Это простое приложение "Список дел" позволяет вам отрабатывать основные принципы работы с компонентами, связывание данных и методы во VueJS.
//  Вы можете добавить дополнительную функциональность, например, редактирование дел или фильтрацию списка.