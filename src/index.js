document.addEventListener("DOMContentLoaded", () => {
  // select the form element
    // DONE (Line 8) - attach a 'submit' event listener
    // DONE (Line 10) - on submit (in our callback), read the value the user inputs 
    //  (Line ) - append input values to list
      // select the ul element
      // create a new li element
      // set innerText of li to input.value
      // append the new li to the existing ul   

  const form = document.querySelector("#create-task-form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#new-task-description");
    if(input.value /*no need for !== "" because !== is not & '': is an empty string, which is a falsey value; double negative is a positive, so it can be removed  */) {
      renderTask (input.value)
      event.target.reset();
    }
  });
});

function renderTask(task) {
  const list = document.querySelector("#tasks"); // ul element
  list.innerHTML += `<li>${task}</li>`;
  // ALTERNATE WAY BELOW
  const item = document.createElement("/li"); // li element only in JS 
  item.innerText = task;
  list.append(item);
  // adding delete button below
  // const deleteButton = document.createElement("p")
  // deleteButton.innerText = "DELETE";
  // item.append(deleteButton);
}


// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// preventDefault on click event
  // document.addEventListener("DOMContentLoaded", () => {
  //   // your code here
  //   document.getElementById("submit-button").addEventListener("click", function(event) {
  //     event.preventDefault();
  // }, false)
  // });