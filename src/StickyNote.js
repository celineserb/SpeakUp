const { board } = window.miro;
var x='Oh wow !!'
var color="blue"
async function init() {
    const stickyNote = await board.createStickyNote({
      content: x,
      style:{fillColor:color},
    });
  
    await board.viewport.zoomTo(stickyNote);
  }
init();