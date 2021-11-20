const { board } = window.miro;
var x='Oh wow !!'
async function init() {
    const text = await board.createText({
      content: x,
    });
  
    //await board.viewport.zoomTo(text);
  }
init();