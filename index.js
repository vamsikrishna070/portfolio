document.addEventListener("DOMContentLoaded", () => {
  const typingRole = document.getElementById("typing-role");

  if (!typingRole) {
    return;
  }

  const roles = ["Web-Developer", "Video & Photo-Editor", "Poster-Designer"];
  const typingSpeed = 110;
  const deletingSpeed = 60;
  const holdDelay = 1400;
  const nextWordDelay = 250;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeRole = () => {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    typingRole.textContent = currentRole.slice(0, charIndex);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = holdDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = nextWordDelay;
    }

    window.setTimeout(typeRole, delay);
  };

  typingRole.textContent = "";
  typeRole();
});
