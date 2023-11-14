const hamburger = document.querySelector(".hamburger");
const contentWrapper = document.querySelector(".content-wrapper");

hamburger.onclick = function() {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
  contentWrapper.classList.toggle('active');
}

// document.querySelectorAll('.skill-card').forEach(card => {
//   card.addEventListener('transitionend', function() {
//       if (this.querySelector('.expanded-content').style.width === '100px') {  /* Must match the width in .expanded-content:hover */
//           let skill = this.getAttribute('data-skill');
//           this.querySelector('.skill-bar').style.width = skill + '%';
//       } else {
//           this.querySelector('.skill-bar').style.width = '0%';
//       }
//   });
// });

document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseover', function() {
    let skill = this.getAttribute('data-skill');
    this.querySelector('.skill-bar-filled').style.width = skill + '%';
  });
  card.addEventListener('mouseout', function() {
    this.querySelector('.skill-bar-filled').style.width = '0%';
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
