const sports=[
  {
    id:1,
    title:"Krampon",
    category:"Futbol",
    price:674.48,
    img:"https://sportive.akinoncdn.com/products/2022/03/16/377777/36a636ba-4d32-4aac-ac44-4a35e6ba3f19_size300x300.jpg",
    desc:"Nike Jr Mercurial Vapor 14 Club Tf Çocuk Siyah Halı Saha Ayakkabısı DJ2901-007"


  },
  {
    id:2,
    title:"Basketbol Topu",
    category:"Basketbol",
    price:69.48,
    img:"https://sportive.akinoncdn.com/products/2022/03/10/376862/36163c30-a266-441f-be68-04c0f82c3d14_size300x300.jpg",
    desc:"Nike Aksesuar Everyday All Court 8P Unisex Siyah Basketbol Topu N.100.4370.933.07"

  },
  {
    id:3,
    title:"Bone",
    category:"Yuzme",
    price:154.48,
    img:"https://sportive.akinoncdn.com/products/2021/05/22/315821/cb223b72-2b8a-4dca-ac9b-74727ecd4ce0_size300x300.jpg",
    desc:"Arena 3D Ultra Unisex Mavi Yüzücü Bonesi 9165674"

  },
  {
    id:4,
    title:"Eldiven",
    category:"Futbol",
    price:231.22,
    img:"https://sportive.akinoncdn.com/products/2022/02/14/371979/63443ce9-2b94-4607-b2e1-f3b944fbb52b_size300x300.jpg",
    desc:"Puma Ultra Grip 4 Rc Unisex Gri Kaleci Eldiveni 04179004"

  },
  {
    id:5,
    title:"Raket",
    category:"MasaTenisi",
    price:72,
    img:"https://sportive.akinoncdn.com/products/2021/04/18/310831/09b15c1e-6656-41da-ad7b-62a0a63b3638_size300x300.jpg",
    desc:"Sportive Taichi Pinpon Raketi 3 Yildiz SPT-2909V"

  },
  {
    id:6,
    title:"Basketbol Ayakkabisi",
    category:"Basketbol",
    price:788,
    img:"https://sportive.akinoncdn.com/products/2022/03/25/379394/9bfa3c47-5d5a-4e96-b15a-576b934665a7_size300x300.jpg",
    desc:"adidas Ownthegame 2.0 Erkek Siyah Basketbol Ayakkabısı H00471"
  },
  {
    id:7,
    title:"Yuzme Gozlugu",
    category:"Yuzme",
    price:102,
    img:"https://sportive.akinoncdn.com/products/2021/10/25/331390/0f534458-8708-494d-b8b3-675ceeab05cd_size300x300.jpg",
    desc:"Arena Cobra Ultra Swipe Unisex Çok Renkli Yüzücü Gözlüğü 003929600"
  },
  {
    id:8,
    title:"Pinpon Topu",
    category:"MasaTenisi",
    price:45,
    img:"https://sportive.akinoncdn.com/products/2020/08/18/265751/393c8b7c-2849-4bd9-8173-041252df5c51_size300x300.jpg",
    desc:"Sportive 6Lı Pinpon Topu SPT-2910V"

  },
  {
    id:9,
    title:"Tekmelik",
    category:"Futbol",
    price:150,
    img:"https://sportive.akinoncdn.com/products/2020/04/06/188243/892fea8d-d38d-49b6-be89-85362f458f9c_size300x300.jpg",
    desc:"Nike Chrg Grd Unisex Siyah Futbol Tekmelik SP2164-010"
  }
]

let btnDom=document.querySelector(".btn-container")
let menuDOM=document.querySelector(".section-center")

const newSports=sports.map(item=>{
  return item.category
})

console.log(newSports)

const newArray=[...new Set(newSports)]

console.log(newArray)

newArray.unshift("Hepsi")
console.log(newArray)

function generateButton(){
  newArray.forEach(item=>{
    let button=document.createElement("button")
    button.setAttribute("class","btn btn-outline-dark btn-item")
    button.setAttribute("id",item)
    button.innerHTML=item
    btnDom.appendChild(button)
    
    
  })
    document.querySelector("#Hepsi").addEventListener("click",allSports)
    document.querySelector("#Futbol").addEventListener("click",football)
    document.querySelector("#Basketbol").addEventListener("click",basketball)
    document.querySelector("#Yuzme").addEventListener("click",swimming)
    document.querySelector("#MasaTenisi").addEventListener("click",tennis)

 
  
}

generateButton()

    


function generateItem(sports){
  let item=`
  <div class="menu-items col-lg-6 col-sm-12">
  <img src="${sports.img}" alt="${sports.title}" class="photo">
  <div class="menu-info">
              <div class="menu-title">
                <h4>${sports.title}</h4>
                <h4 class="price">${sports.price}</h4>
              </div>
              <div class="menu-text">
              ${sports.desc}
              </div>
            </div>
          </div>
  
  `
  return item
}

function allSports(){
  let allItem=""
  sports.map(sports=>{
    allItem+=generateItem(sports)
  })
  menuDOM.innerHTML=allItem
}



function football(){
  let allItem=""
  sports.map(sports=>{
    if(sports.category==="Futbol"){
        allItem+=generateItem(sports)
    }
  })
  menuDOM.innerHTML=allItem
}

function basketball(){
  let allItem=""
  sports.map(sports=>{
    if(sports.category==="Basketbol"){
        allItem+=generateItem(sports)
    }
  })
  menuDOM.innerHTML=allItem
}

function swimming(){
  let allItem=""
  sports.map(sports=>{
    if(sports.category==="Yuzme"){
        allItem+=generateItem(sports)
    }
  })
  menuDOM.innerHTML=allItem
}

function tennis(){
  let allItem=""
  sports.map(sports=>{
    if(sports.category==="MasaTenisi"){
        allItem+=generateItem(sports)
    }
  })
  menuDOM.innerHTML=allItem
}

