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
      console.log("testssssssssssssssssssssssssssssssssssssssssssssssssss");
      
      speechRecognition.onresult = (event) => {
        let interim_transcript = "";
  
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
          console.log(interim_transcript);
        }
        
        if (interim_transcript=='sticky' ){
          
          board.ui.openPanel({ pageUrl: "app.html", maxHeight:7 })
        }
        console.log("interim", interim_transcript);
           
      }

    }else{
      speechRecognition.stop();

    }
    
    




  })
}
init();
