chrome.runtime.sendMessage({todo:"showPageAction"});
chrome.runtime.onMessage.addListener(function (response, sendResponse) {
  console.log(response);
  $("#injected").css({
    display: 'block'
  });
  var timeleft = 10;
  $("#timer").text(timeleft+" seconds");
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      //document.getElementById("countdown").innerHTML = "Finished";
      $("#timer").text("Time Over");
      $("#injected").css({
        display: 'none'
      });
    } else {
      //document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      $("#timer").text(timeleft+" seconds");
    }
    timeleft -= 1;
  }, 1000);
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

//I am present button clicked
$("#btnPresent").click(function(){
  //find email meetId attendanceId
  chrome.storage.sync.get(['meetId','email'],function(data){
      var email = data.email;
      var meetid = data.meetId;
      //make post request
      if(meetid!="none"){
        chrome.runtime.sendMessage({todo:"markAttendance",email:email,meet_link:"https://meet.google.com/"+meetid });
        //action on response
          $("#injected").css({
           display: 'none'
          });
      }
      });
});