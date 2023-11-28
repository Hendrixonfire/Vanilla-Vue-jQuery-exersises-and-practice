
// ****Написать функцию, которая создает слайдер изображений и добавляет его в указанный элемент.



//start code

function createImageSlider(images, targetElement) {

    const slider = document.createElement('div');
    slider.classList.add('slider');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Назад';
    prevButton.addEventListener('click',showPrevImage);//!!

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Вперёд';
    nextButton.addEventListener('click',showNextImage);//!!


    slider.appendChild(prevButton);
    slider.appendChild(nextButton);
    slider.appendChild(imageContainer);

    images.forEach(imageUrl => {
        const image = document.createElement('img');
        image.src = imageUrl;
        imageContainer.appendChild(image);
    });

    let currentImageIndex = 0;

    function showPrevImage(){
        currentImageIndex = (currentImageIndex - 1);
        updateImage();
    }


    function showNextImage(){
        currentImageIndex = (currentImageIndex + 1);
        updateImage();
    }


    function updateImage(){
        const imageElements = imageContainer.querySelectorAll('img');
        imageElements.forEach((image, index) => {
            image.style.display = index === currentImageIndex ? 'block' : 'none';
        });
    }

    updateImage();

    targetElement.appendChild(slider);
}