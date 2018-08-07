/*WebView*/
var webvw = document.getElementById('webview');

/*Button group*/
//go Button
var go = document.getElementById('go');
//refresh button
var refresh = document.getElementById('refresh');
//foward button
var forward = document.getElementById('forward');
//back button
var back = document.getElementById('back');
//Address Bar
var adrsBar = document.getElementById('adrsBar');

/*Browser Functions*/
//go to an address
go.addEventListener('click', function(event){
  //sets the source of the webview by converting the
  //input into a string
  webvw.src = "http://"+adrsBar.value.toString();
});

//This will go to an address when the enter key has been pressed
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if(keyName === "Enter"){
        webvw.src = "http://"+adrsBar.value.toString();
    }
});

//refresh page
refresh.addEventListener('click', function(event){
  webvw.reload();
});

//go back
back.addEventListener('click', function(event){
  webvw.goBack();
});

//go forward
forward.addEventListener('click', function(event){
  webvw.goForward();
});
