document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    const statusEl = document.getElementById("enquiry-status");
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (statusEl) {
        statusEl.textContent =
          "Thank you for your enquiry. We will contact you shortly.";
      }
      enquiryForm.reset();
    });
  }
});

