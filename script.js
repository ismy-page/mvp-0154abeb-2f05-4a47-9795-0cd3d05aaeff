(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.getElementById("ctaButton");
  const out = document.getElementById("ctaResult");
  const email = "hello@talkingcanvas.art";
  if (btn && out) {
    btn.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
          out.textContent = `Email copied: ${email}`;
        } else {
          out.textContent = `Email: ${email}`;
        }
      } catch (err) {
        out.textContent = `Email: ${email}`;
      }
    });
  }
})();

