
const photos = [
    "images/puppy.jpg",
    "images/growing.jpg",
    "images/grown.jpg"
];

const stories = [
    {
        title: "Watching You Grow",
        description: "I couldn't wait to see the dog you would become.",
        order: [0, 1, 2],
        captions: [
            "You were so tiny when we first met.",
            "Every day, you grew a little bigger and a little braver.",
            "And before I knew it, my little puppy had grown up."
        ]
    },
    {
        title: "Wishing You Were Little Again",
        description: "Now I wish I could go back and hold the little you again.",
        order: [2, 1, 0],
        captions: [
            "You're all grown up now, but still my little girl.",
            "I remember watching you grow, one day at a time.",
            "If only I could hold that tiny puppy one more time."
        ]
    }
];

let currentStory = 0;
let currentPhoto = 0;

const carouselImage = document.getElementById("carousel-image");
const storyTitle = document.getElementById("story-title");
const storyDescription = document.getElementById("story-description");
const photoStage = document.getElementById("photo-stage");
const photoCaption = document.getElementById("photo-caption");
const photoCounter = document.getElementById("photo-counter");

const story1Button = document.getElementById("story1");
const story2Button = document.getElementById("story2");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const dots = document.querySelectorAll(".dot");

const stages = ["BEGINNING", "MIDDLE", "END"];

function updateCarousel() {
    const story = stories[currentStory];
    const photoIndex = story.order[currentPhoto];

    carouselImage.classList.add("fade");

    carouselImage.src = photos[photoIndex];
    carouselImage.alt = "My dog growing up";

    storyTitle.textContent = story.title;
    storyDescription.textContent = story.description;
    photoStage.textContent = stages[currentPhoto];
    photoCaption.textContent = story.captions[currentPhoto];

    photoCounter.textContent =
        "0" + (currentPhoto + 1) + " / 03";

    dots.forEach(function(dot, index) {
        if (index === currentPhoto) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    prevButton.disabled = currentPhoto === 0;
    nextButton.disabled = currentPhoto === 2;

    requestAnimationFrame(function() {
        carouselImage.classList.remove("fade");
    });
}

function changeStory(storyNumber) {
    currentStory = storyNumber;
    currentPhoto = 0;

    story1Button.classList.toggle("active", currentStory === 0);
    story2Button.classList.toggle("active", currentStory === 1);

    updateCarousel();
}

function nextPhoto() {
    if (currentPhoto < 2) {
        currentPhoto++;
        updateCarousel();
    }
}

function previousPhoto() {
    if (currentPhoto > 0) {
        currentPhoto--;
        updateCarousel();
    }
}

story1Button.addEventListener("click", function() {
    changeStory(0);
});

story2Button.addEventListener("click", function() {
    changeStory(1);
});

nextButton.addEventListener("click", nextPhoto);
prevButton.addEventListener("click", previousPhoto);

updateCarousel();
