 const menuToggle = document.querySelector('.toggle');
 const showcase = document.querySelector('.showcase');

 menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('active');
   showcase.classList.toggle('active');
 });

 const logo = document.querySelectorAll("#logo path");

 for (let i = 0; i < logo.length; i++) {
   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
 };