let containers = document.querySelectorAll(".container");
console.log(containers);
let hero = document.querySelector(".hero");

function gsapanimation() {
    gsap.fromTo(
        [containers, hero], 
        { 
            y: 10,
            opacity: 0,
        },
        { 
            delay: 0.5,
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power2.easeOut',
            stagger: {
                from: 'start',
                amount: 0.5,
            },
        }
    );
}

gsapanimation();
