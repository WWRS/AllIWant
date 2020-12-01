function goToAlliwant() {
  let alliwant_url = "https://www.youtube.com/watch?v=yXQViqx6GMY";
  if (!window.location.href.startsWith(alliwant_url)) {
    window.location.replace(alliwant_url);
  }
}

function checkActive() {
  browser.runtime.sendMessage(0).then(function(response) {
    if (response) {
      goToAlliwant();
    }
  });
}

window.setInterval(checkActive, 250)
