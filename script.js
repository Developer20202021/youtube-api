 const  API = 'AIzaSyDaeYzz1wQ9kfg7rGt8mVrQPjbqXJjYD74';


 fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=40&playlistId=PLBCF2DAC6FFB574DE&key=AIzaSyDaeYzz1wQ9kfg7rGt8mVrQPjbqXJjYD74`)
 .then(res => res.json())
 .then(data => getVideo(data)) 




 const videoTag = document.getElementById('video');

 let year;
 let title;

 function getVideo (data){
  
     if (data === undefined) {
         return;
     }
    
    // console.log(data.items[0].contentDetails.videoId);
  data.items.forEach(element => {
    //   console.log(element.snippet);
      title =element.snippet.title;
     year = getTime(element.contentDetails.videoPublishedAt);
      const videoId =element.contentDetails.videoId;
     
      createNewVideo(videoId);
  });
  
    // videoTag.setAttribute('src',`https://www.youtube.com/embed/${data.items[0].contentDetails.videoId}`);
   
 }
 getVideo();

//  create a new video 

 const createNewVideo = (id) =>{
     const videoContainer = document.getElementById('videos-container');
     const div = document.createElement('div');
     div.setAttribute('class','per-video');

     div.innerHTML =`<div class="video-container">
     <iframe id="video" width="360" height="215" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <div>${title}</div>
     <div>${year}</div>
 </div>`;
 videoContainer.appendChild(div);

 }


//  get time
const getTime = (publishTime) =>{
    const today = new Date();
    const getYear = today.getFullYear();
    const oldDay = new Date(publishTime);
    const oldYear = oldDay.getFullYear();
    const publishYear = getYear - oldYear||0;
    
    return publishYear;
   
}

 