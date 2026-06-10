  let pin = "";
  function press(num) {
    if (pin.length < 6) {
      pin += num;
      document.getElementById("display").innerText = pin;
    }
  }
  function clearPin() {
    pin = "";
    document.getElementById("display").innerText = "______";
  }
  function checkPassword() {
    if (pin === "041426") {
      document.getElementById("message").innerHTML = `
        <img src="Happy Bubu.gif">
        <p>💖 Aww you remembered! 🥺</p>
      `;
      setTimeout(() => {
        window.location.href = "ready.html";
      }, 2000);
    } else {
      document.getElementById("message").innerHTML = `
        <img src="Mad Bubu.jpg">
        <p>Wrong, Dudu! Try again! 😒😒</p>
      `;
      setTimeout(() => { clearPin(); }, 1500);
    }
  }
