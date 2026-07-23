/* Custom-order form: builds a prefilled mailto so the visitor's own mail app
   sends the request. No backend, nothing stored, no third-party form service. */

document.getElementById("customForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("cf-name").value.trim();
  var email = document.getElementById("cf-email").value.trim();
  var device = document.getElementById("cf-device").value;
  var idea = document.getElementById("cf-idea").value.trim();

  var subject = "WALLPR custom order — " + name;
  var body =
    "Name: " + name + "\n" +
    "Reply-to: " + email + "\n" +
    "Screen: " + device + "\n\n" +
    "What I want:\n" + idea + "\n";

  window.location.href =
    "mailto:ethan.goldstein.dev@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
});
