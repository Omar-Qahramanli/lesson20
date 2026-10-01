const questions = document.querySelectorAll(".faq-question");

 questions.forEach(function(question) {

    question.addEventListener("click", function() {

    const item = question.parentElement;
        const icon = question.querySelector(".icon");

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
        icon.textContent = "−";
    } else {
            icon.textContent = "+";
        }

     });

      });
   