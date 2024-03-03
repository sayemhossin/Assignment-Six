const cardDiv = document.getElementById('card-div')
const cardDiv2 = document.getElementById('card-div-two')


const allCard = async(id) =>{
 document.getElementById('spinner').style.display='block'
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`)
    const data = await res.json()
         cardDiv.innerHTML=''

    data.posts.forEach(card =>{
let active = ''
if(card.isActive){
  active = `<div class="absolute h-6 w-6 bg-green-500 rounded-full ml-20"></div>`
}else{
  active = `<div class="absolute h-6 w-6 bg-red-500 rounded-full ml-20"></div>`
}
      setTimeout(() => {
         document.getElementById('spinner').style.display='none'
      }, 2000);
       const div = document.createElement('div')
      div.style.display='flex'
       div.innerHTML=`
       <div  class="flex flex-1 flex-col lg:flex-row  bg-[#797DFC1A] gap-5 p-7 rounded-md">
    <div>
    <div class="avatar relative">
      <div class="w-24 rounded-xl ">
        <img src="${card.image}" />

      </div>
      
    ${active}

    </div>


 </div>
 <div class="space-y-6">
     <div class="flex gap-14">
      <p>#${card.category}</p>
      <p>Author:${card.author.name}</p>
      </div>
 <h1 id="title" class="text-2xl font-extrabold">${card.
title}</h1>
 <p>${card.description}</p>
 <hr>
      <div class="flex justify-between">

         <div class="flex gap-9 items-center">
         
        <div class="flex gap-2 items-center">
         <img id="img" src="images/Group 13.png" alt="">
         <p>${card.comment_count}</p>
         </div>

         <div class="flex gap-2 items-center">
         <img id="img" src="images/Group 16.png" alt="">
         <p> ${card.view_count}</p>
        </div>
        <div class="flex gap-2 items-center">
        <img id="img" src="images/Group 18.png" alt="">
         <p>${card.posted_time} Min</p>
         </div>

         </div>
         <div>
             <button onclick="button(' ${card.title}  -- views: ${card.view_count}')"><img src="images/email 1.png" alt="">
             </button>
         </div>

      </div>
 </div>

</div>

       
       `
cardDiv.appendChild(div)



    })
}

const handleSearch = () =>{
  const input =  document.getElementById('input').value
  if(input){
    allCard(input)
}else{
   alert("write what do you need!!")
}
  
}

let count = 1
function button(e){
   const number = document.getElementById('count').innerText = count
   count++
   const name = document.getElementById('name')
const p = document.createElement('p')
p.style.padding='10px'
p.style.paddingTop='20px'
p.style.paddingBottom='20px'
p.style.fontSize='25px'
p.style.fontWeight='bold'
p.style.boxShadow='2px 2px 2px 2px black'
p.innerText = e
name.appendChild(p)
}



// card section 2

const cardTwo = async() =>{
   const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts')
   const data = await res.json()
  
   data.forEach(card2 =>{
   let a = ''
    if(!card2.author.designation){
      a = 'Unknown'
       
    }else{
      a = card2.author.designation
    }
    let b = ''
    if(!card2.author.posted_date){
      b = 'No Publish Data'
    }else{
      b = card2.author.posted_date
    }
   const div = document.createElement('div')
   div.innerHTML=`
   <div class="card bg-base-100 shadow-xl px-4">
    <figure><img class="rounded-2xl" src="${card2.cover_image}" alt="Shoes" /></figure>
    <div class="py-2 space-y-3">
      <div class="flex">
      <img src="images/Frame.png" alt="">
      <p>${b}</p>
      
      </div>
      <h2 class="card-title font-extrabold">${card2.title}</h2>
      <p>${card2.description}</p>
      <div class="flex gap-10">
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img src="${card2.profile_image}" />
          </div>

        </div>

       <div>
        <h2 class="font-extrabold">${card2.author.name}</h2>
        <p>${a}</p>
      </div>
      </div>
    </div>
  </div>
   `
   cardDiv2.appendChild(div)



   })
}




cardTwo()
allCard('comedy')