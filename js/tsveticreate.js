function inputValues() {
    let firstName, lastName, company, branch, emailField;
    firstName = $('#firstName').val().toLowerCase();
    lastName = $('#lastName').val().toLowerCase();
    company = $('#company').val().toLowerCase();
    branch = $('#branch').val().toLowerCase();
    emailField = $('#emailField');

    emailField.val(`${firstName[0]}.${lastName}@${branch}-${company}.com`);
}