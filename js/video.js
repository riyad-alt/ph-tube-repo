console.log('video script added')
function getTimeString(time){
 const hour = parseInt (time/3600)
 let reammingSecond = time % 3600;
const minute = parseInt(reammingSecond / 60);
reammingSecond = reammingSecond % 60;
return `${hour}hour ${minute}minute${reammingSecond} second ago
`;

}
console.log( getTimeString(7865));

//1-Fetch Load and show categories on html

//create categories
 const loadCategories=() => {

    //fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then((data) =>displayCategories (data.categories))
    .catch((error)=> console.log(error)); 
 }

 const loadVideo =() => {

    //fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=>res.json())
    .then((data) =>displayVideso(data.
        videos))
    .catch((error)=> console.log(error)); 
 };

 const loadCategoryVideo = (id) =>{
//   alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then((res)=>res.json())
  .then((data) =>displayVideso(data.category))
  .catch((error)=> console.log(error));
 }

 const cardDemo ={
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

 const displayVideso =(videos) => {
  const videoContainer = document.getElementById("video")
  videoContainer.innerHTML="";

 if(videos.length==0){
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML=`
  <div class="min-h-[500px] flex flex-col gap-5 justify-center items-center">
  <img src="assets/Icon.png"/>
  <h2 class=" text-center text-xl font-bold">No Content Here In This Category</h2>
  </div>
    `;
    return
 }
 else{
    videoContainer.classList.add("grid");
 }

 videos.forEach(video => {
  console.log(video);
  const card = document.createElement("div");
  card.classList="card card-compact"
  card.innerHTML=`
  <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${video.others.posted_date?.length
        ==0? "":`      <span class="absolute text-xs right-2 bottom-2 bg-black rounded p-1 text-white">${getTimeString(video.others.posted_date)}</span>`
      }
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div>
   <img class="h-8 w-8 rounded-full object-cover" src=${video.authors[0].profile_picture} />
   </div>
   <div>
  <h2 class="font-bold">${video.title}</h2>
  <div class="flex items-center gap-2">
   <p class="text-gray-400">${video.authors[0].profile_name}</p>
   ${video.authors[0].verified== true?`<img class="w-5" src="https://img.icons8.com/?size=50&id=36872&format=png"/>`:""}
  </div>
  <p></p>
   </div>

  </div>
  `;
  videoContainer.append(card)
 })
 }


//create display categories
const displayCategories=(categories) => {
    const categorieContainer =document.getElementById('categories')

    categories.forEach(item => {
       console.log(item); 
       //create a button 

       const buttonContainer = document.createElement("div");
      buttonContainer.innerHTML = `
      <button onclick="loadCategoryVideo(${item.category_id})" class="btn">
      ${item.category}
      </button>
      `
      

   //add button to catagory container
    categorieContainer.append(buttonContainer);
    });

    }
   

loadCategories();
loadVideo();

