const hamburger = document.querySelector(".hamburger");
const contentWrapper = document.querySelector(".content-wrapper");

hamburger.onclick = function() {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
  contentWrapper.classList.toggle('active');
}

// const header = document.querySelector("header");

// window.addEventListener("scroll", function() {
//   if (window.scrollY > 0) {
//     header.style.background = "rgba(0, 0, 0, 0.9)"; 
//   } else {
//     header.style.background = "rgba(0, 0, 0, 0)"; 
//   }
// });

document.querySelectorAll('.skill-card').forEach(card => {
  let skillBarFilled = card.querySelector('.skill-bar-filled');
  let timeout;

  card.addEventListener('mouseover', function() {
      let skill = this.getAttribute('data-skill');
      clearTimeout(timeout); // Clear any existing timeout to prevent interference
      timeout = setTimeout(() => {
          skillBarFilled.style.width = skill + '%';
      }, 150); // Sets the delay time in milliseconds 
  });

  card.addEventListener('mouseout', function() {
      clearTimeout(timeout); // Clears the timeout if the mouse leaves before the delay
      skillBarFilled.style.width = '0%';
  });
});

// function typeWriter() {
//   const text = "Hi, I'm Aqeel, \nSoftware Developer";
//   let i = 0;
//   let isReversing = false;

//   function reverseText() {
//     isReversing = true;
//     let reversedText = text.split('').reverse().join('');
//     document.getElementById('typedText').innerHTML = reversedText;
//   }

//   function type() {
//     if (i < text.length && !isReversing) {
//       document.getElementById('typedText').innerHTML += text.charAt(i);
//       i++;
//       setTimeout(type, 100);
//     } else if (i === text.length && !isReversing) {
//       setTimeout(reverseText, 1000); // Delay before reversing
//     } else if (isReversing) {
//       document.getElementById('typedText').innerHTML = text.substr(0, i);
//       i--;
//       if (i >= 0) {
//         setTimeout(type, 100); 
//       } else {
//         isReversing = false; 
//         i = 0;
//         setTimeout(type, 1000); 
//       }
//     }
//   }

//   type();
// }

// typeWriter();
