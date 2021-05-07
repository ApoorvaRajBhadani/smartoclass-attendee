chrome.runtime.sendMessage({todo:"showPageAction"});

$('body').append(`
  <div id="injected">
      <h3>Are you present</h3>
      <input type="submit" value="Yes" id="btnPresent">
      <br>
      <br>
      <b>Time Left: </b>
      <b id="timer"> </b>
  </div>
`);
$('#injected').css({
  width: '300px',
  height: '150px',
  position: 'absolute',
  //right: '18px',
  //bottom: '200px',
  zIndex: '100',
  display: 'none',
  //flexDirection: 'column',
  //alignItems: 'center',
  //justifyContent: 'center',
  background: 'rgb(221,221,221)',
});