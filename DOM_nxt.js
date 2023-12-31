// // Создание новых элементов:
// // С помощью DOM мы можем создавать новые элементы и добавлять их на страницу. Для этого мы используем методы createElement и appendChild.
// // Пример:


// // // Создаем новый элемент <div>
// // const newDiv = document.createElement('div');

// // // Устанавливаем текстовое содержимое для элемента
// // newDiv.textContent = 'Новый элемент';

// // // Добавляем элемент внутрь другого элемента на странице
// // const container = document.getElementById('containerId');
// // container.appendChild(newDiv);
// // Удаление элементов:
// // DOM также предоставляет нам возможность удалять элементы со страницы. Для этого мы используем метод removeChild.
// // Пример:


// // // Получаем ссылку на родительский элемент
// // const parentElement = document.getElementById('parentElementId');

// // // Получаем ссылку на элемент, который нужно удалить
// // const elementToRemove = document.getElementById('elementToRemoveId');

// // // Удаляем элемент из родительского элемента
// // parentElement.removeChild(elementToRemove);
// // Изменение атрибутов элементов:
// // Мы также можем изменять атрибуты элементов с помощью DOM. Например, мы можем изменять значения атрибутов src, href и других.
// // Пример:

// // const imageElement = document.getElementById('imageElementId');

// // // Изменяем значение атрибута src
// // imageElement.src = 'new-image.jpg';

// // const linkElement = document.getElementById('linkElementId');

// // // Изменяем значение атрибута href
// // linkElement.href = 'https://www.example.com';
// // Изменение классов элементов:
// // Мы также можем добавлять и удалять классы у элементов с помощью DOM. Это позволяет нам изменять стили элементов или применять определенные стили при определенных событиях.
// // Пример:


// // const myElement = document.getElementById('myElementId');

// // // Добавляем класс к элементу
// // myElement.classList.add('myClass');

// // // Удаляем класс из элемента
// // myElement.classList.remove('myClass');



// DOM (Document Object Model) 
 
// DOM представляет структуру HTML или XML документа в виде дерева объектов, где каждый узел дерева представляет собой элемент, атрибут, текстовый блок или комментарий. Доступ к DOM-дереву позволяет программистам манипулировать и изменять содержимое, структуру и стили документа. 
 
// Функции DOM в JavaScript 
 
// JavaScript предоставляет ряд функций и методов для работы с DOM, включая следующие: 
 
// document.getElementById('id'): Возвращает элемент с указанным идентификатором. 
// document.getElementsByClassName('class'): Возвращает коллекцию элементов с указанным классом. 
// document.getElementsByTagName('tag'): Возвращает коллекцию элементов с указанным тегом. 
// document.querySelector('selector'): Возвращает первый элемент, соответствующий указанному селектору. 
// document.querySelectorAll('selector'): Возвращает все элементы, соответствующие указанному селектору. 
// Навигация по DOM-элементам 
 
// Навигация по DOM-элементам позволяет получить доступ к различным частям дерева DOM и манипулировать ими. Вот некоторые методы навигации: 
 
// element.parentNode: Возвращает родительский элемент указанного элемента. 
// element.childNodes: Возвращает коллекцию всех дочерних элементов указанного элемента. 
// element.firstChild: Возвращает первый дочерний элемент указанного элемента. 
// element.lastChild: Возвращает последний дочерний элемент указанного элемента. 
// element.nextSibling: Возвращает следующий соседний элемент указанного элемента. 
// element.previousSibling: Возвращает предыдущий соседний элемент указанного элемента. 
// Основы работы с событиями 
 
// События позволяют реагировать на действия пользователя или на изменения, происходящие в браузере. Вот несколько основных концепций работы с событиями: 
 
// Привязка обработчика события: Используйте метод addEventListener для привязки функции-обработчика к определенному событию элемента. 
// Типы событий: В JavaScript есть множество типов событий, таких как "click", "mouseover", "keydown" и т. д 
 
 
 
 
// Объект события: Когда событие происходит, создается объект события, который содержит информацию о событии и его целевом элементе. Обработчик события может получить доступ к этому объекту через параметр функции-обработчика. 
// Прекращение распространения события: Методы event.stopPropagation() и event.stopImmediatePropagation() позволяют остановить дальнейшее распространение события вверх по дереву DOM или прекратить обработку событий других обработчиков. 
// Предотвращение действия по умолчанию: Используйте метод event.preventDefault() для отмены стандартного действия, которое обычно происходит в ответ на событие (например, отмена отправки формы при нажатии на кнопку "submit"). 


