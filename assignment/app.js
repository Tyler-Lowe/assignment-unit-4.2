document.getElementById("img-container").addEventListener("click", changeImage);
let changeCounter = 2;
function changeImage () {
    display = document.getElementById('img-changer');
    if(changeCounter % 2 === 0) {
        document.getElementById('img-changer').innerHTML = `<img  src="/assignment/images/1968-Chevrolet-Camaro-David-Koreshs-old-car-720x340.jpeg" alt="Camaro">`
        document.getElementById('text-changer').innerHTML = `<h3 id="text-changer">This is a 1968 camaro.</h3>`
        changeCounter++
        console.log(changeCounter);
    } else {
        document.getElementById('img-changer').innerHTML = `<img  src="/assignment/images/0ed3b4bf47ade00e9b368a51dc17e8f8.jpeg" alt="Jeep">`
        document.getElementById('text-changer').innerHTML = `<h3 id="text-changer">This is a jeep wrangler outfitted to go on extended camping trips.</h3>`
        changeCounter++
        console.log(changeCounter);
    }
}