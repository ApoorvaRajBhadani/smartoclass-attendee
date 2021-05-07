$(function(){
    chrome.storage.sync.get('email',function(data){
        $('#meet').text(data.email);
    }); 
});