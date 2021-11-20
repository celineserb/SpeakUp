const { board } = window.miro;
var x='Oh wow !!'
var color="#f5d22e"
async function init() {
    const card = await board.createCard({
      title: x,
      style:{cardTheme: color },
    });
  
    await board.viewport.zoomTo(card);
  }
init();