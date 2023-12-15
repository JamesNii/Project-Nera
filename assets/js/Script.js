function automaticSlide(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    setTimeout(automaticSlide, 5000)

}
automaticSlide()


