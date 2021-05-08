chrome.runtime.sendMessage({todo:"showPageAction"});
chrome.runtime.onMessage.addListener(function (response, sendResponse) {
  console.log(response);
  $("#injected").css({
    display: 'block'
  });
});
$('body').append(`
  <div id="injected">
      <h3 id="areyoupres">Are you present?</h3>
      <input class="innerele" type="submit" value="Yes" id="btnPresent">
      <b>Time Left: </b>
      <b id="timer"> </b>
  </div>
`);
$('#injected').css({
  'border-style': 'solid',
  padding: '15px 15px 15px 15px',
  width: '300px',
  height: '150px',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '100',
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgb(250,250,250)',
});
$("#areyoupres").css({
  position: 'absolute',
  left: '50%',
  top: '30%',
  transform: 'translate(-50%, -50%)',
});
$("#btnPresent").css({
  position: 'absolute',
  left: '50%',
  top: '60%',
  transform: 'translate(-50%, -50%)',
});
$("#btnPresent").click(function(){
  //find email meetId attendanceId
  //make post request
  //action on response
  $("#injected").css({
    display: 'none'
  });
});


