const { board } = window.miro;
var x='Oh wow !!'
var s="rectangle"
async function init() {
    const shape = await board.createShape({
      content: x,
      shape: s
    });
  
    //await board.viewport.zoomTo(shape);
  }
init();