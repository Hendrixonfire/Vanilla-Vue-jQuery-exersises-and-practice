var app = new Vue({
    el: '#calc',
    data() {
        return {
          num1: 0,
          num2: 0,
          action:""
        };
      },

    computed: {
        result() {
          switch(this.action) {
            case "+":
              return this.num1 + this.num2;
            case "-":
              return this.num1 - this.num2;
            case "*":
              return this.num1 * this.num2;
            case "/":
              return this.num1 / this.num2;
          }
        }
    }
    });

//  Задача 2: Список задач
//Создайте список задач, где пользователь может добавлять, удалять и отмечать задачи как выполненные. Каждая задача должна иметь название и флажок для отметки выполнения. Отображайте количество выполненных и невыполненных задач.

//Задача 3: Фильтрация списка
//Расширьте задачу со списком задач, чтобы добавить возможность фильтрации задач по их статусу (выполненные/невыполненные) или по ключевому слову. При изменении фильтра, список задач должен автоматически обновляться.

//Задача 4: Таймер
//Создайте простой таймер, который отсчитывает время в обратном порядке. Пользователь должен иметь возможность запустить, остановить и сбросить таймер. Отображайте текущее время на странице.

//Задача 5: Галерея изображений
//Создайте галерею изображений с помощью Vue.js. Пользователь должен иметь возможность просматривать изображения, переключаться между ними и отображать информацию о каждом изображении (название, описание).