const cardDiv = document.getElementById('card-div')


const allCard = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    data.posts.forEach(card =>{
       const div = document.createElement('div')
      
       div.innerHTML=`
       <div  class="flex flex-col lg:flex-row flex-1 bg-[#797DFC1A] gap-5 p-7 rounded-md">
    <div>
    <div class="ok avatar online">
    <div class="w-24 rounded-full">
      <img src=" ${card.image}" />
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
             <button onclick="button('${card.title}  ${card.view_count}')"><img src="images/Group 40106.jpeg" alt="">
             </button>
         </div>

      </div>
 </div>

</div>

       
       `
cardDiv.appendChild(div)



    })
}

let count = 1
function button(e){
   

   const number = document.getElementById('count').innerText=count
   count++
    
   const name = document.getElementById('name')

const p = document.createElement('p')

// p.innerText = title.textContent
p.innerText = e



name.appendChild(p)


}


allCard()