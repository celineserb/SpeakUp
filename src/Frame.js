const { board } = window.miro;
var x='Oh wow !!'
async function init() {
    const frame = await board.createFrame({
      title: x,
      
    });
  
    await board.viewport.zoomTo(frame);
  }
init();