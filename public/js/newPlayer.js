document.addEventListener("DOMContentLoaded", function () {
    const newPlayerButton = document.getElementById("newPlayer");
    const modal = document.querySelector(".modal");
    const saveButton = document.getElementById("addNewPlayer");
    const cancelButton = document.getElementById("cancelNewPlayer");
  
    const newNameInput = document.getElementById("newName");
    const newEmailInput = document.getElementById("newEmail");
    const newPasswordInput = document.getElementById("newPass");
  
    newPlayerButton.addEventListener("click", function () {
      modal.classList.add("is-active");
    });
  
    cancelButton.addEventListener("click", function () {
      modal.classList.remove("is-active");
    });
  
    saveButton.addEventListener("click", function () {
      const newPlayerData = {
        user_name: newNameInput.value,
        email: newEmailInput.value,
        password: newPasswordInput.value,
      };
  

      fetch("api/user/newUser", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newPlayerData),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("New player created:", json);
          document.location.href = '/';
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  
      modal.classList.remove("is-active");
    });
  });
  