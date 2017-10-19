var arr = new Array();
arr[arr.length] = new Array("Google", "http://www.google.com/search?q=");
arr[arr.length] = new Array("Site", "https://www.google.com/search?q=site%3Ahorsehour.com+");
arr[arr.length] = new Array("DuckDuckGo", "https://duckduckgo.com/?q=");
arr[arr.length] = new Array("Yippy", "http://yippy.com/");
arr[arr.length] = new Array("Bing", "http://www.bing.com/search?q=");
arr[arr.length] = new Array("Yahoo", "http://search.yahoo.com/search?p=");
arr[arr.length] = new Array("Baidu", "http://www.baidu.com/s?wd=");

// arr[arr.length] = new Array("Excite", "http://search.excite.com/search.gw?search=");
// arr[arr.length] = new Array("Lycos", "http://search.lycos.com/web/?q=");
// arr[arr.length] = new Array("Teoma", "https://www.teoma.com/web?q=");

arr[arr.length] = new Array("Thesaurus", "http://www.thesaurus.com/browse/");
arr[arr.length] = new Array("Forvo", "https://forvo.com/search/");
arr[arr.length] = new Array("Wayback", "http://web.archive.org/web/*/");
arr[arr.length] = new Array("YouTube", "https://www.youtube.com/results?search_query=");
arr[arr.length] = new Array("Wiki", "https://en.wikipedia.org/wiki/");
arr[arr.length] = new Array("Lib", "http://gen.lib.rus.ec/search.php?req=");

function addOptions(){
  var sel = document.search.engine;
  for(var i = 0; i < arr.length; i++){
    sel.options[i] = new Option(arr[i][0], i); 
  }
}

function startSearch(){
  searchString = document.search.query.value; 
  if(searchString != ""){
    var searchEngine = document.search.engine.selectedIndex;
    var finalSearchString = arr[searchEngine][1] + searchString;
		
		//location.href = finalSearchString;
    // open it in a new tab
    
    window.open(finalSearchString, "_blank");
  }
  return false;
}

function checkKey(){
  if(window.event.keyCode == '13'){
    return startSearch();
  }
  else return true;
}
