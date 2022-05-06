// creating a regex variable
// var reg = /[a-z]/ig;
// another way to create a regex var
// var reg2 = new RegExp(/[a-z]/,'i');

// PROJECT TASK - create regular expression to match criteria in fields
// JS will listen to typing event, look for matches for patterns in input fields, validate it, provide feedback to user
// 1. create object to store all regular expressions for each input field (name property)
// 2. attach an event listener to each input field (keyup event)
// 3. find which regex is associated to each field, test against appropriate regex with validate function
// 4. add feedback to the user to indicate if input is valid/invalid (add validation styles to css)

// validation script here
const inputs = document.querySelectorAll('input');

// patterns is an object
const patterns = {
    // must match name property in html 
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    // password used \m metacharacter to include @- symbols
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    // basic regex for an email has 4 parts: name, @, domain, dot., extension, dot.something (optional with?)
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// create validation function - 2 parameters (field, regex used to test against)
function validate(field, regex){
    // grabbing input field value and passing to validate func
    // console.log(regex.test(field.value)); // returns true/false
    if (regex.test(field.value)) {
        // add a class to input field
        field.className = 'valid'; // reassign class to valid if matches regex
    } else {
        field.className = 'invalid';
    }
}

// add event listener
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value); 
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});