function calculateGrades() {
   
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const studentClass = document.getElementById('class').value.trim();
    const section = document.getElementById('section').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);
    
    let isValid = true;

    if (!name) {
        displayError('nameError', 'Please enter the name.');
        isValid = false;
    }
    if (!studentClass) {
        displayError('classError', 'Please enter the class.');
        isValid = false;
    }
    if (!section) {
        displayError('sectionError', 'Please enter the section.');
        isValid = false;
    }
    if (!rollNo) {
        displayError('rollNoError', 'Please enter the roll number.');
        isValid = false;
    }
    if (isNaN(subject1) || subject1 < 0 || subject1 > 100) {
        displayError('subject1Error', 'Please enter valid marks for Subject 1 (0-100).');
        isValid = false;
    }
    if (isNaN(subject2) || subject2 < 0 || subject2 > 100) {
        displayError('subject2Error', 'Please enter valid marks for Subject 2 (0-100).');
        isValid = false;
    }
    if (isNaN(subject3) || subject3 < 0 || subject3 > 100) {
        displayError('subject3Error', 'Please enter valid marks for Subject 3 (0-100).');
        isValid = false;
    }
    if (isNaN(subject4) || subject4 < 0 || subject4 > 100) {
        displayError('subject4Error', 'Please enter valid marks for Subject 4 (0-100).');
        isValid = false;
    }
    if (isNaN(subject5) || subject5 < 0 || subject5 > 100) {
        displayError('subject5Error', 'Please enter valid marks for Subject 5 (0-100).');
        isValid = false;
    }
    

    if (!isValid) {
        return;
    }

    
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;

    let grade = '';
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = `
        <h3>Result</h3>
        <p>Name: ${name}</p>
        <p>Class: ${studentClass}</p>
        <p>Section: ${section}</p>
        <p>Roll No: ${rollNo}</p>
        <p>Total Marks: ${totalMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
    `;
}

function displayError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.innerText = '';
    });
}
