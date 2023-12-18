function automaticSlide(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    setTimeout(automaticSlide, 5000)

}
automaticSlide()


 // JavaScript functions to show/hide the modal
 function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


