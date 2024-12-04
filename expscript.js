// JavaScript to handle the "Explore More" button click
document.getElementById("explore-more-btn").addEventListener("click", function() {
    // Toggle the visibility of the additional content
    const moreContent = document.getElementById("more-content");
  
    // Toggle the hidden class to show/hide more content
    moreContent.classList.toggle("hidden");
  
    // Change the button text when content is revealed
    if (moreContent.classList.contains("hidden")) {
      this.textContent = "Explore More"; // Show original text
    } else {
      this.textContent = "Show Less"; // Change text to "Show Less"
    }
  });
  