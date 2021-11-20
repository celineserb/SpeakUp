const { board } = window.miro;
var x='Oh wow !!'
var color="blue"
async function init() {
    const text = await board.createText({
      content: x,
      style:{fillColor:color},
    });
  
    //await board.viewport.zoomTo(text);
  }
init();