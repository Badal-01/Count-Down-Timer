"use strict";

function get_time() {
  let set = Number(document.getElementById("take_input").value);
  document.getElementById("ele").innerText = set;
}

function set_time() {
  let set = Number(document.getElementById("take_input").value);
  document.getElementById("finalResult").innerText = set;
}

function start() {
  var id = setInterval(countDown, 1000);
  function countDown() {
    let a = Number(document.getElementById("finalResult").innerText);
    a--;
    document.getElementById("finalResult").innerText = a;
    if (a == 0) {
      document.getElementById("finalResult").innerText = "STOP!";
      stop();
    }
    id;
  }
  function stop() {
    clearInterval(id);
  }
}
