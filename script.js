
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
          header.classList.add("header-scroll");
      } else {
          header.classList.remove("header-scroll");
      }
  });
});
// Function for navigation hamburger
const hamburger = document.querySelector(".hamburger");
const contentWrapper = document.querySelector(".content-wrapper");

hamburger.onclick = function() {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
  contentWrapper.classList.toggle('active');
}


// Function for card skill containers
document.querySelectorAll('.skill-card').forEach(card => {
  let skillBarFilled = card.querySelector('.skill-bar-filled');
  let timeout;

  card.addEventListener('mouseover', function() {
      let skill = this.getAttribute('data-skill');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          skillBarFilled.style.width = skill + '%';
      }, 150); 
  });

  card.addEventListener('mouseout', function() {

      skillBarFilled.style.width = '0%';
      clearTimeout(timeout);
  });
});



// Function to update timeline position based on scroll
function updateTimeline() {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  // const timeline = document.getElementById('timeline');
  const timelineIcon = document.getElementById('timelineIcon');
  // timeline.style.top = scrollPercentage + '%';
  timelineIcon.style.top = scrollPercentage + '%';
}
// Event listener for scroll to update timeline position
window.addEventListener('scroll', updateTimeline);

function updateMirroredTimeline() {
  const scrollPercentage = 100 - (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const timelineIconMirrored = document.getElementById('timelineIconMirrored');
  timelineIconMirrored.style.top = scrollPercentage + '%';
}

// Function to handle icon visibility based on scroll
function handleIconVisibility() {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const timelineIcon = document.getElementById('timelineIcon');
  const timelineIconMirrored = document.getElementById('timelineIconMirrored');

  if (scrollPercentage > 0 && scrollPercentage < 100) {
    // timelineIcon.style.display = 'block';
    // timelineIconMirrored.style.display = 'block';
  } else {
    timelineIcon.style.display = 'none';
    timelineIconMirrored.style.display = 'none';
  }
}
// Event listener for scroll to handle icon visibility
window.addEventListener('scroll', handleIconVisibility);
window.addEventListener('scroll', updateMirroredTimeline);


function redirectToPage() {
  // Redirecting to another HTML page
  window.location.href = 'https://formsubmit.co/el/jufidu';
  // <a href="https://formsubmit.co/el/jufidu" target="_blank">Email us</a>

}
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
