var cipher = prompt("Please enter a sentence.");

var caps = function(topSecret) {
  password = topSecret.charAt(0).toUpperCase() + topSecret.slice(1, -1) + topSecret.slice(-1).toUpperCase();
  return password;
};

var backcaps = function(backwards) {
  backpass = backwards.slice(-1) + backwards.slice(1,-1) + backwards.charAt(0);
  return backpass;
}

alert(backcaps(caps(cipher)));
