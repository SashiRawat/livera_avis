const comedianList = [
    {
      name: "Arpita Singh",
      image: "arpita.png",
      description: "Hello everyone! My name is Arpita Singh, and I am delighted to introduce myself as the founder of Libera Avis. Currently, I am pursuing my BBA degree, which has equipped me with essential skills and knowledge to embark on this exciting entrepreneurial journey. However, my passion extends beyond academics and business. I have also been a national badminton player, which has instilled in me the values of discipline, perseverance, and the drive to excel.",
      website: "https://sashirawat.github.io/arp_portfolio/"
    },
    {
      name: "Akshay Punia",
      image: "akshay.png",
      description: "Hello, everyone! My name is Akshay Puria, and I am thrilled to introduce myself to you. I am a resident of Assam, a beautiful state in India, and I am currently residing in the vibrant city of Calcutta. I am pursuing a BBA degree from JD Birla Institute of Management, where I am honing my skills in the world of business and management.",
      website: "https://www.janedoecomedy.com"
    }
  ];
  
  // Generate comedian cards
  const comedianListDiv = document.getElementById("comedian-list");
  comedianList.forEach(comedian => {
    const comedianCard = document.createElement("div");
    comedianCard.classList.add("comedian-card");
  
    const comedianImage = document.createElement("img");
    comedianImage.src = comedian.image;
    comedianImage.alt = comedian.name;
    comedianImage.classList.add("comedian-image");
    comedianCard.appendChild(comedianImage);
  
    const comedianDetails = document.createElement("div");
    comedianDetails.classList.add("comedian-details");
  
    const comedianName = document.createElement("h3");
    comedianName.classList.add("comedian-name");
    comedianName.textContent = comedian.name;
    comedianDetails.appendChild(comedianName);
  
    const comedianDescription = document.createElement("p");
    comedianDescription.classList.add("comedian-description");
    comedianDescription.textContent = comedian.description;
    comedianDetails.appendChild(comedianDescription);
  
    const comedianLink = document.createElement("a");
    comedianLink.classList.add("comedian-link");
    comedianLink.href = comedian.website;
    comedianLink.textContent = "Visit Website";
    comedianDetails.appendChild(comedianLink);
  
    comedianCard.appendChild(comedianDetails);
    comedianListDiv.appendChild(comedianCard);
  });
  
  // Submit form handler
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const messages = document.getElementById("messages").value;
  
    // Perform form submission handling (e.g., AJAX request)
    // Here, you can send the form data to a server-side script to process the contact form
    
    const name = document.getElementById("username").value;
    const emails = document.getElementById("email").value;
    const message = document.getElementById("messages").value;
  
    // Perform form submission handling (e.g., AJAX request)
    // Here, you can send the form data to a server-side script to process the contact form
    
        var form = document.getElementById('contact-form'); 
      form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("insert.php")),
      }).then(
        response => response.json()
      ).then((html) => {
        window.open('d.html', '_blank');
      });
    });
 // Clear form inputs
    contactForm.reset();
  });