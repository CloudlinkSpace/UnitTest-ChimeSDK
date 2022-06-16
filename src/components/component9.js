function checkMessage(name,url){  
    console.log("------------------------"+url);
    const img_ext=new Array(".jpg",".jpeg",".png",".apng",".avif",".gif",".svg",".webp");
    const vid_ext=new Array(".mp4",".mov",".wmv",".flv",".avi",".avchd",".webm",".mkv");
    const audio_ext=new Array(".mp3",".m4a","flac",".wav",".wma",".aac")
    console.log();
    
    for (let i = 0 ;  i < img_ext.length ; i++ ) {
      if(name.endsWith(vid_ext[i])){
          return (
              <>                        
                  <video controls="controls" >
                      <source src= {url} type="video/mp4"/>
                  </video>
              </>
          );
      }
      else if (name.endsWith(img_ext[i])){
          return (
              <>
                  <img src={url} />
                  
              </>
          );
      }
      else if (name.endsWith(audio_ext[i])) {
          return (
              <audio controls>
                  <source src={url} type="audio/mp3"/>
              </audio>
          );
      }
    
    }
}