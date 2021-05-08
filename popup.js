$(function(){
    chrome.storage.sync.get(['email','meetId'],function(data){
        console.log(data);
    }); 
});