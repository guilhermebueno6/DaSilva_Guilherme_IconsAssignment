(() =>{

console.log('fired!');



let allImages = document.querySelectorAll(".allImages img");



function logMyId() {
console.log(this.id);



this.classList.toggle("toggledThing")


}





function logTheSVG(){
debugger;
}



allImages.forEach(item => {
item.addEventListener("click", logMyId);
});






})();
