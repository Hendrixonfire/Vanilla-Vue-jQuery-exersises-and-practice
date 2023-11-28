const animal = {
    sound: 'Шум',
    makeSound() {
      console.log(this.sound);
    }
  };
  
  // // Создаем новый объект, прототипом которого является `animal`
  const cat = Object.create(animal);
  cat.sound = 'Мяу';
  
  // // Вызываем метод `makeSound` объекта `cat`
  cat.makeSound(); // Выводит "Мяу"
  
  // // Создаем еще один объект, прототипом которого также является `animal`
  const dog = Object.create(animal);
  dog.sound = 'Гав';
  
  // Вызываем метод `makeSound` объекта `dog`
  dog.makeSound(); // Выводит "Гав"
  
  