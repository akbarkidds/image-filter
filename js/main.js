// Create IMG And Add Attr
let imgCreateElement = document.createElement("img")
let imgAttribute = document.createAttribute("src")
imgAttribute.value = "./img/boboiboy.jpg"
imgCreateElement.setAttributeNode(imgAttribute)
imgAttribute = document.createAttribute("id")
imgAttribute.value = "imgBodyFilter"
imgCreateElement.setAttributeNode(imgAttribute)
document.getElementById("img").appendChild(imgCreateElement)
//Create Arrow-Up
imgCreateElement = document.createElement("img")
imgAttribute = document.createAttribute("src")
imgAttribute.value = "./img/icon/arrow-up.png"
imgCreateElement.setAttributeNode(imgAttribute)
document.getElementById("imgFilterArrow").appendChild(imgCreateElement)
//show click
document.getElementById("imgFilterArrow").onclick = function(){
    document.getElementById("imgFilterArrow").style.display = "none";
    document.getElementById("imgFilter").style.display = "";
}
//minimize click
document.getElementById("imgFilterArrowDown").onclick = function(){
    document.getElementById("imgFilterArrow").style.display = "";
    document.getElementById("imgFilter").style.display = "none";
}
//image Filter
let result = []
let range = document.getElementsByTagName("input")
for (let index = 0; index < range.length; index++) {
    result[index] = range[index].value
    document.getElementById("imgBodyFilter").style.filter = `
    blur(${result[0]}px)
    brightness(${result[1]}%)
    contrast(${result[2]}%)
    hue-rotate(${result[3]}deg)
    grayscale(${result[4]}%)
    sepia(${result[5]})
    saturate(${result[6]})
 `
    range[index].addEventListener("input", function() {
        result[index] = range[index].value
        document.getElementById("imgBodyFilter").style.filter = `
            blur(${result[0]}px)
            brightness(${result[1]}%)
            contrast(${result[2]}%)
            hue-rotate(${result[3]}deg)
            grayscale(${result[4]}%)
            sepia(${result[5]})
            saturate(${result[6]})
         `
    })
}