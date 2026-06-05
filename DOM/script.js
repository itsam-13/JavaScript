let hello = document.querySelector("h1")
console.dir(hello)
hello.textContent = "Hello kese hai aap log"

hello.innerHTML = "<i>Hello</i>" //hello kese ho is replaced by Hello with italic



let a = document.querySelector("a")
console.dir(a)
// a.href = "https://www.google.com"
a.setAttribute("href", "https://www.google.com")

let img = document.querySelector("img")
img.setAttribute("alt", "yohohohohho")

// img.setAttribute("src", "https://images.unsplash.com/photo-1779952274981-ea7074647d8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8")

console.log(img.getAttribute("src"));
img.removeAttribute("alt")




let hey = document.createElement("h2") //blank h2 
hey.textContent = "this is Heading 2"
document.body.append(hey)




let styleH1 = document.querySelector("h1")
// styleH1.style.color = "#ff00ff"
// styleH1.style.backgroundColor = "cyan"
// styleH1.style.fontFamily = "Gilroy"

styleH1.classList.add("pookie") //recommended way!!
styleH1.classList.toggle("pookie") //recommended way!!
