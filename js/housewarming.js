function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
	        return pair[1];
        }
    }
    return "Friend/Relative"
}

var name = getQueryVariable("name");
name = correctName(name);
document.getElementById("name").innerHTML = name;

function correctName(name) {
  name = name.replace("%20", " ");
  return name;
}