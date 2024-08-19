// Animate statistics numbers
const counters = document.querySelectorAll('#statistics .stat-box h2');
const speed = 200; // Adjust this speed to control how fast the numbers count up

counters.forEach(counter => {
    const animate = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animate, 20); // Adjust this timeout for smoother animation
        } else {
            counter.innerText = target;
        }
    };

    animate();
});

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        { text: "“Excellent slides, Good follow up projects that beginners can do and feel accomplished, good step by step instructions, being available for clarifications and good teaching by the instructor. Thank you!!”", author: "- Jaya - parent of Janani and Shrijani" },
        { text: "“I really liked the experience from this camp. It was also very easy for me to understand the topics we were learning about. I also liked to those mini projects after every class. In all I really liked this Python Camp.”", author: "- Alagappan Arunachalam" },
        { text: "“This was a great experience! I truly enjoyed learning python especially because of our host Prasi! She was super nice and really patient with us!”", author: "- Stesha Navil" }
    ];

    let currentIndex = 0;

    const updateTestimonial = () => {
        const testimonialText = document.querySelector('.testimonial-text');
        const testimonialAuthor = document.querySelector('.testimonial-author');

        testimonialText.textContent = testimonials[currentIndex].text;
        testimonialAuthor.textContent = testimonials[currentIndex].author;
    };

    document.querySelector('.next-button').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    });

    document.querySelector('.prev-button').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    // Initialize with the first testimonial
    updateTestimonial();
});
