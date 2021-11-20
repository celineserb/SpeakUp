const { board } = window.miro;
const {sticky} = './app.js';


var stop = 0;
async function init() {
  var speechRecognition = new webkitSpeechRecognition();
  await board.ui.on("icon:click", async () => {
    stop=stop+1;
    console.log(stop)
    /*let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";

    speechRecognition.lang = 'English';

    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;*/
    if(stop%2 != 0){
      
      let final_transcript = "";

      speechRecognition.lang = 'English';

      speechRecognition.continuous = true;
      speechRecognition.interimResults = true;
      speechRecognition.start();
      
      
      speechRecognition.onresult = (event) => {
        let interim_transcript = "";
  
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          interim_transcript = "";

          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
          
          if (interim_transcript.replace(/\s+/g, '')  =='sticky' ){
            
            board.ui.openPanel({ pageUrl: "sticky_note.html", maxHeight:2 })
            var j = document.querySelector(".toolbar-library toolbar-library--3074457368019670423 toolbar-library--visible").style.visibility = "hidden";
            console.log(j);
          }
  
          else if (interim_transcript.replace(/\s+/g, '')=='frame' ){
            
            board.ui.openPanel({ pageUrl: "frame.html", maxHeight:7 })
          }
  
  
          else if (interim_transcript.replace(/\s+/g, '')=='card' ){
            
            board.ui.openPanel({ pageUrl: "card.html", maxHeight:7 })
          }
  
          else if (interim_transcript.replace(/\s+/g, '')=='rectangle' ){
            
            board.ui.openPanel({ pageUrl: "rectangle.html", maxHeight:7 })
          }
  
          else if (interim_transcript.replace(/\s+/g, '')=='circle' ){
            
            board.ui.openPanel({ pageUrl: "circle.html", maxHeight:7 })
          }else if (interim_transcript.replace(/\s+/g, '')=='triangle' ){
            
            board.ui.openPanel({ pageUrl: "triangle.html", maxHeight:7 })
          }else if (interim_transcript.replace(/\s+/g, '')=='octagon' ){
            
            board.ui.openPanel({ pageUrl: "octagon.html", maxHeight:7 })
          }else if (interim_transcript.replace(/\s+/g, '')=='star' ){
            
            board.ui.openPanel({ pageUrl: "star.html", maxHeight:7 })
          }else if (interim_transcript.replace(/\s+/g, '')=='text' ){
            
            board.ui.openPanel({ pageUrl: "text.html", maxHeight:7 })
          }
          else 
          {
            console.log("nothing was read" );
          }

          console.log("interim '", interim_transcript, "'");
        }
        

        
        
           
      }

    }else{
      speechRecognition.stop();

    }
    
    




  })
}
init();
