function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const container = document.querySelector(".container");
    const leftElements = document.querySelectorAll(".left");
  
    sidebar.classList.toggle("open");
    container.classList.toggle("shift");
  
    leftElements.forEach(element => {
      element.classList.toggle("shift");
    });
  }
  