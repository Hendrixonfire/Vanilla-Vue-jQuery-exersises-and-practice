let galerySetup = {
	template:`
        <div class="slider">
        <p>This is a picture # {{currentImageIndex}}</p>
        <p v-if="currentImageIndex == 1"> {{firstElement}}</p>
        <p v-if="currentImageIndex == 2"> {{secondElement}}</p>
        <p v-if="currentImageIndex == 3"> {{thirdElement}}</p>
        <p v-if="currentImageIndex == 4"> {{fifthElement}}</p>
        <button class="prev-button" id="left" v-on:click="showPreviousImage()">
        <svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
        <g class="svgFill">
        <path  d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
            c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
        </g>
        </svg>
        </button>
        <button class="next-button" id="right" v-on:click="showNextImage()">
        <svg version="1.1" id="Capa_1" width='40px' height='40px ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
        <g class="svgFill">
        <path  d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
            c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
            "/>
        </g>
        </svg>
        </button>
        <div class="image-container">
        <img :src="imageUrl">
        </div>
        </div> `,
    data () {
          
           return{
            currentImageIndex : null,
                imageArray: [
                    'Photo of a Lake',
                    
                    'Photo of a Beach',
                      
                    'Photo of a Forest',
                           
                    'Photo of a Desert'
                               
                         ],
           } 
        },
        beforeMount(){
           this.currentImageIndex =  1;
               
           this.firstElement = this.imageArray[0];
           this.secondElement = this.imageArray[1];
           this.thirdElement = this.imageArray[2];
           this.fifthElement = this.imageArray[3];
        },
     
        computed:{
            imageUrl(){
                return `pic/photo-${this.currentImageIndex}.jpg`;
            }
          
        },
        methods: {
         
            showNextImage() {

                if (this.currentImageIndex<4){
                    this.currentImageIndex++;
                } else 
                return this.currentImageIndex = 1;
             
          },

            showPreviousImage(){

                if (this.currentImageIndex > 1) {
                    this.currentImageIndex--;
                } else 
                return this.currentImageIndex = 4;
            
            }
        }
        
                  
}      
            


   let app = new Vue({
	el:"#app",
	components: {
		 'galery-setup':galerySetup
	}

});
