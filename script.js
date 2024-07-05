function scrollToElement(elementSelector , instance = 0){
    const elements = document.querySelectorAll(elementSelector); // querySelectorAll : return a list of element that match
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: "smooth"});
    }
}


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click' , () =>{  // () =>{} or function(){} similar to each other
    scrollToElement('.header');
});

link2.addEventListener('click' , () =>{  
    scrollToElement('.header' , 1); //scroll to second element that is a class header (elements[1] : second element) 
});

link3.addEventListener('click' , () =>{  
    scrollToElement('.column');
});