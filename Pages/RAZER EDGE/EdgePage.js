    // Function to start or pause videos when they come into or out of the viewport
    function handleVideoIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    }

    // Create an Intersection Observer instance
    const videoObserver = new IntersectionObserver(handleVideoIntersect, {
        threshold: 0.5, // Adjust this threshold as needed
    });

    // Select all video elements with the "scroll-trigger" class
    const videos = document.querySelectorAll(".scroll-trigger");

    // Observe each video element
    videos.forEach((video) => {
        videoObserver.observe(video);
    });
