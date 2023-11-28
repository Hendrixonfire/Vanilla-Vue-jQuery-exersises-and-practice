// Практика:


// // Задача 1:
// // Напишите функцию countProperties(obj), которая принимает объект obj и возвращает количество его свойств.

const teacher = {
    teacherName:'Elon',
    subject:'Math'
};
const teacherTwo ={
    teacherName:'Gena',
    subject:'Math',
    class:'A22'
};

const teacherThree ={ };

const countProperties = obj => {
    return propretyCount = Object.keys(obj).length;
}

//console.log(countProperties(teacher));

// // Задача 2:
// // Напишите функцию getKeys(obj), которая принимает объект obj и возвращает массив его ключей.

const getKeys = obj => {
 return arrayOfKeys = Object.keys(obj);
}
//onsole.log(getKeys(teacher));

// // Задача 3:
// // Напишите функцию getValues(obj), которая принимает объект obj и возвращает массив его значений.

const getValues = obj => {
    return arrayOfValues = Object.values(obj);
}

//console.log(getValues(teacher));

// // Задача 4:
// // Напишите функцию getEntries(obj), которая принимает объект obj и возвращает массив его записей (массивов [key, value]).

const getEntries = obj => {
    return arrayOfEntries = Object.entries(obj);
}

//console.log(getEntries(teacher));

// // Задача 5:
// // Напишите функцию mergeObjects(obj1, obj2), которая объединяет свойства двух объектов obj1 и obj2 в новый объект. Если свойство уже существует в первом объекте, 
//используйте значение из второго объекта. Функция должна возвращать новый объединенный объект.
 
const mergeObjects = (obj1, obj2) => {
 return newObject = {...obj1, ...obj2};
}

//console.log(mergeObjects(teacher, teacherTwo));

// // Задача 6:
// // Напишите функцию hasProperty(obj, prop), которая проверяет, содержит ли объект obj свойство с именем prop. Возвращает true, если свойство существует, и false в противном случае.

const hasProperty = (obj, prop) => {
    return isProperty = obj.hasOwnProperty(prop);
}
//console.log(hasProperty(teacher, 'class'));

// // Задача 7:
// // Напишите функцию isObjectEmpty(obj), которая проверяет, является ли объект obj пустым (не содержит свойств). Возвращает true, если объект пустой, и false в противном случае.
 
const isObjectEmpty = obj => {
    if (Object.keys(obj).length === 0){
        return alert('Object is empty');
    } else {
        return alert ('Object has properties');
    }
}

 //console.log(isObjectEmpty(teacherThree));

// // Задача 8:
// // Напишите функцию deepFreeze(obj), которая замораживает объект obj и все его вложенные объекты. Возвращает замороженный объект.


const deepFreeze = obj => {
    frozenObject = Object.freeze(obj);
    return alert (`Object was frozen`);
}
//console.log(deepFreeze(teacher));
//teacher.subject = 'Chemestry';
//console.table(teacher);

// // Задача 9:
// // Напишите функцию copyObjectProperties(obj, properties), которая создает новый объект на основе объекта obj, содержащий только указанные свойства из массива properties. 
//Функция должна возвращать новый объект с выбранными свойствами.
let copy =[];
//console.log(copy);

const copyObjectProperties = (obj, properties) => {
  
    for( let i = 0; i < properties.length; i++) {
        if (obj.hasOwnProperty(properties[i])){
            copy[properties[i]] = obj[properties[i]];
        }
    }
    return copy;
}

//onsole.log(copyObjectProperties(teacherTwo, ['subject', 'class']));
//console.log(copy);


// // Задача 10:
// // Напишите функцию filterObjectsByPropertyValue(arr, prop, value), которая фильтрует массив объектов arr и 
//возвращает новый массив, содержащий только те объекты, у которых значение свойства prop равно value.

const files = [
    { id: 1, name: 'html.md', size: 499 },
    { id: 2, name: 'css.md', size: 612  },
    { id: 3, name: 'javascript.md', size: 1236 }
  ]

const filterObjectsByPropertyValue = (arr, prop, value) => 
   arr.filter(object => {
     
      return object[prop] == value;

});



console.table(filterObjectsByPropertyValue(files, 'id', 2));
 