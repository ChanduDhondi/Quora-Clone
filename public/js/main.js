// new post form - client side validation logic
function clearErrors() {
  const error = document.querySelectorAll(".error");
  error.forEach((err) => (err.textContent = ""));
}

function showMessage(field, message) {
  const errorEle = document.querySelector(`#${field}Error`);
  errorEle.textContent = message;
}

const postForm = document.querySelector("#postForm");
if (postForm) {
  postForm.addEventListener("submit", (event) => {
    clearErrors();

    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    if (!title.value) {
      showMessage("title", "Title cannot be empty.");
      title.style.borderColor = "red";
      event.preventDefault();
    }
    if (!description.value) {
      showMessage("description", "Description cannot be empty");
      description.style.borderColor = "red";
      event.preventDefault();
    }
  });
}

const userForm = document.querySelector("#userForm");
if (userForm) {
  userForm.addEventListener("submit", (event) => {
    clearErrors();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    if (!username.value) {
      showMessage("username", "Username cannot be empty.");
      username.style.borderColor = "red";
      event.preventDefault();
    }
    if (!password.value) {
      showMessage("password", "Password cannot be empty");
      password.style.borderColor = "red";
      event.preventDefault();
    }
  });
}

document.querySelectorAll("#cross").forEach(function (crossBtn) {
  crossBtn.addEventListener("click", function () {
    // Find the closest parent post element and hide it
    const post = crossBtn.closest(".post");
    if (post) {
      post.style.display = "none";
    }
  });
});
