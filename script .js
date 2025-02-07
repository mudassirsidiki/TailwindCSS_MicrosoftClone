<script>
  let currentIndex = 0;
  const images = document.querySelectorAll('.image'); // Get all images
  const imageContainer = document.querySelector('.image-container'); // Get the image container

  function showNextImage() {
    // Hide current image
    images[currentIndex].style.display = 'none';

    // Increment the index (loop back to 0 after last image)
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].style.display = 'block';

    // Slide the image container to the next image
    imageContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  // Initial display of the first image
  setInterval(showNextImage, 2000); // Change image every 2 seconds
</script>
