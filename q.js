let searchbox = document.getElementById("searchbox")
let search = document.getElementById("search")
let showmore = document.getElementById("showmoreimages")
let form = document.getElementById("form")
let btn = document.getElementById("btn")


let acesskey = 'XkFHpxYvgstEuwFArrZ6g9wDGCep_w7Ly9USJN1JgXI'

let page = 1;
let keyword = ''
const result1 = async(e)=>{
     keyword = searchbox.value 

     let link = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acesskey}&per_page=12`

     let response = await fetch(link)
     let data = await response.json();
    //  console.log(data)

    if(page === 1){
        showmore.innerHTML = ''
    }

    let final = await data.results
    final.map((result)=>{
        let image = document.createElement("img")
        image.src = result.urls.small
        let imagelink = document.createElement("a")
        imagelink.href = result.links.html
        imagelink.target = "_blank"

        showmore.appendChild(imagelink)
        imagelink.appendChild(image)
    })
    btn.style.display = "block"
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    page = 1
    result1()
})

btn.addEventListener('click',function(e){
    page++
    result1();
})