let inputFields = document.querySelectorAll("input,textarea");
let submitButton = document.querySelectorAll("submit-btn");
let errorMessage = document.getElementById("error-message");
let invitationForm = document.getElementById("Invitation");
let inviteForm = document.getElementById("event-invite-form");
let submitBtn = document.getElementById("submit-btn");
let closeBtn = document.getElementById("close-btn");

//Change input field Border colour on focus and blur
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("focus", function () {
    this.style.borderColor = "#ff5722";
  });

  inputFields[i].addEventListener("blur", function () {
    if (this.value.trim() !== "") {
      this.style.borderColor = "green";
    } else {
      this.style.borderColor = "#ff5722";
    }
  });
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const eventName = document.getElementById("event-name").value.trim();
  const eventDate = document.getElementById("event-date").value.trim();
  const startTime = document.getElementById("start-time").value.trim();
  const endTime = document.getElementById("end-time").value.trim();
  const description = document.getElementById("event-description").value.trim();
  const eventlocation = document.getElementById("event-location").value.trim();

  const InviteLocation = document.getElementById("event-location-display");
  const InviteStartTime = document.getElementById("event-Starttime-display");
  const InviteEndTime = document.getElementById("event-Endtime-display");
  const InviteDate = document.getElementById("event-date-display");
  const InviteDescription = document.getElementById(
    "event-description-display"
  );
  const InviteName = document.getElementById("event-title-display");

  if (
    eventName === "" ||
    eventDate === "" ||
    startTime === "" ||
    endTime === "" ||
    description === "" ||
    eventlocation === ""
  ) {
    errorMessage.classList.remove("hidden");
    return;
  } else {
    InviteName.textContent = eventName;
    InviteDate.textContent = eventDate;
    InviteStartTime.textContent = startTime;
    InviteEndTime.textContent = endTime;
    InviteDescription.textContent = description;
    InviteLocation.textContent = eventlocation;

    inviteForm.classList.add("hidden");
    invitationForm.classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", function (event) {
  errorMessage.classList.add("hidden");
});
