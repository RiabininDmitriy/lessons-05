window.onload = function () {
    var elem = document.body.appendChild(
        document.createElement("p")
    )
    elem.innerText = "Hello"
    elem.addEventListener('click', function (event) {
        this.innerHTML = "<img src = 'img.png' style='width:100px; height:100px'>"
        var img = document.body.getElementsByTagName("img")[0]
        img.addEventListener('mouseover', function (event) {
            this.style.transition = "all 1s easy-out"
            this.style.transform = "scale(2)"
        }
        )
        img.addEventListener('mouseout', function (event) {
            this.style.transition = "all 1s easy-out"
            this.style.transform = "scale(1)"
        })
        img.addEventListener('click',function (event) {
            elem.innerHTML = ""
            event.stopPropagation()
        })
    })

}