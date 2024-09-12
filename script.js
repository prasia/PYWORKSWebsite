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
        { text: "“Excellent slides, Good follow up projects that beginners can do and feel accomplished, good step by step instructions, being available for clarifications and good teaching by the instructor. Thank you!!”", author: "- Jaya - parent of Janani and Shrijani, 2023" },
        { text: "“I really liked the experience from this camp. It was also very easy for me to understand the topics we were learning about. I also liked to those mini projects after every class. In all I really liked this Python Camp.”", author: "- Alagappan Arunachalam, 2023" },
        { text: "“This was a great experience! I truly enjoyed learning python especially because of our host Prasi! She was super nice and really patient with us!”", author: "- Stesha Navil, 2023" },
        { text: "Would like to thank you for all the efforts you've made, to share your knowledge with other kids. The well-organized slides, along with the course materials, demonstrates the hours you've put into this, to perfect the course. It was a great opportunity for my Daughter to get introduced into the world of Python, and you did a fabulous job in explaining difficult concepts with ease. Above all, doing it all for no cost, shows your service-mindedness and dedication in paying back to the society. I would like to appreciate you for this great initiative, and wish you a wonderful future.", author: "- Giftson Jebin, 2022 & 2023"}
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
