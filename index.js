

/*Button group*/
//go Button
var go = document.getElementById('go');
//refresh button
var refresh = document.getElementById('refresh');
//foward button
var forward = document.getElementById('forward');
//back button
var back = document.getElementById('back');


/*Browser Functions*/
//go to page
go.addEventListener('click', function(event){
  //Address Bar
  var adrsBar = document.getElementById('adrsBar');
  //WebView
  var webvw = document.getElementById('webview');
  //sets he source of the webview by converting the
  //input into a string
  webvw.src = "http://"+adrsBar.value.toString();
});

// TODO: Add webview as a global variable for
//functions below

//refresh page
refresh.addEventListener('click', function(event){
  webvvw.reload();
});

//go back
back.addEventListener('click', function(event){
  webvw.goBack();
});

//go foward
forward.addEventListener('click', function(event){
  webvw.goFoward();
});
