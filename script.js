document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("custom-cursor");

  if (cursor) {
    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    });
  }
});
