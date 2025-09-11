
// Get references to elements
const welcomePage = document.getElementById('welcome-page');
const loginPage = document.getElementById('login-page');
const createAccountPage = document.getElementById('create-account-page');
const sensorReadingsPage = document.getElementById('sensor-readings-page');
const medicalReportsPage = document.getElementById('medical-reports-page');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const loginBtn = document.getElementById('login-btn');
const createAccountBtn = document.getElementById('create-account-btn');
const sensorReadingsBtn = document.getElementById('sensor-readings-btn');
const allReportsBtn = document.getElementById('all-reports-btn');
const allReportsBtnCreate = document.getElementById('all-reports-btn-create');
const backBtns = document.querySelectorAll('.back-btn');

// Function to toggle active class on pages
function togglePage(page) {
  welcomePage.classList.remove('active');
  loginPage.classList.remove('active');
  createAccountPage.classList.remove('active');
  sensorReadingsPage.classList.remove('active');
  medicalReportsPage.classList.remove('active');
  page.classList.add('active');
}

// Event listener for Yes button click
yesBtn.addEventListener('click', function() {
  // Show login page
  togglePage(loginPage);
});

// Event listener for No button click
noBtn.addEventListener('click', function() {
  // Show create account page
  togglePage(createAccountPage);
});

// Event listener for Login button click
loginBtn.addEventListener('click', function() {
  // Show sensor readings page
  togglePage(sensorReadingsPage);
});

// Event listener for Create Account button click
createAccountBtn.addEventListener('click', function() {
  // Show sensor readings page
  togglePage(sensorReadingsPage);
});

// Event listener for Sensor Readings button click
sensorReadingsBtn.addEventListener('click', function() {
  // Show sensor readings page
  togglePage(sensorReadingsPage);
});

// Event listener for All Reports button click on login page
allReportsBtn.addEventListener('click', function() {
  // Load medical reports page content within an iframe
  medicalReportsPage.innerHTML = '<iframe src="medical-reports.html" frameborder="0" width="100%" height="100%"></iframe>';
  // Show medical reports page
  togglePage(medicalReportsPage);
});

// Event listener for All Reports button click on create account page
allReportsBtnCreate.addEventListener('click', function() {
  // Load medical reports page content within an iframe
  medicalReportsPage.innerHTML = '<iframe src="medical-reports.html" frameborder="0" width="100%" height="100%"></iframe>';
  // Show medical reports page
  togglePage(medicalReportsPage);
});

// Event listeners for back buttons
backBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    togglePage(welcomePage);
  });
});


// Additional functions
function sendEmail() {
  // Code to send email goes here
  alert("Thank you! An email has been sent. A GP or doctor will get back to you as soon as possible.");
}


function generateCurrentReport() {
    const name = document.getElementById("patient-name").value;
    const id = document.getElementById("patient-id").value; // must match input id exactly
    const phone = document.getElementById("phone-number-input").value;
    const dob = document.getElementById("dob-input").value;
    const temperature = document.getElementById("temperature-input").value;
    const heartRate = document.getElementById("heart-rate-input").value;
    const bloodPressure = document.getElementById("blood-pressure-input").value;


    const reportContent = `
        <div class="report-box">
            <h3>Current Medical Report</h3>
            <p>Patient's Name: ${name}</p>
            <p>Patient's ID: ${id}</p>
            <p>Phone Number: ${phone}</p>
            <p>Date of Birth: ${dob}</p>
            <p>Body Temperature: ${temperature} °C</p>
            <p>Heart Rate: ${heartRate} BPM</p>
            <p>Blood Pressure: ${bloodPressure} mmHg</p>


        </div>
    `;

    document.getElementById("current-report-content").innerHTML = reportContent;
    document.getElementById("current-report").style.display = "block";
}



function generateYearlyReport() {
    var patientName = document.getElementById("patient-name").value;
    var medicalId = document.getElementById("patient-id").value; 
    var patientPhoneNumber = document.getElementById("phone-number-input").value;
    var patientDateOfBirth = document.getElementById("date-of-birth-input").value;
    var selectedYear = document.getElementById("year").value;

    var reportContent = `
        <div class="container report-box">
            <h2 class="text-center">Yearly Medical Report - ${selectedYear}</h2>
            <p>Patient's Name: ${patientName}</p>
            <p>Patient ID: ${medicalId}</p> 
            <p>Patient's Phone Number: ${patientPhoneNumber}</p>
            <p>Patient's Date of Birth: ${patientDateOfBirth}</p>
            <p>Year: ${selectedYear}</p>
            <p>Sensor Readings:</p>
            <p>Body Temperature: 37°C</p>
            <p>Heart Rate: 75 BPM</p>
            <p>Blood Pressure: 150 mmHg</p>
        </div>
    `;

    document.getElementById("yearly-report-content").innerHTML = reportContent;
    document.getElementById("yearly-reports").style.display = "block";
}

function generatePrescription() {
    var patientName = document.getElementById("patient-name").value;
    var medicalId = document.getElementById("patient-id").value;
    var phoneNumber = document.getElementById("phone-number-input").value;
    var dateOfBirth = document.getElementById("date-of-birth-input").value;
    var heartRate = document.getElementById("heart-rate-input").value;
    var temperature = document.getElementById("temperature-input").value;
    var spo2 = document.getElementById("spo2-input").value;
    var diagnosis = document.getElementById("diagnosis-input").value;
    var treatment = document.getElementById("treatment-input").value;
    var notes = document.getElementById("notes-input").value;
    var gpSignature = document.getElementById("gp-signature").value;
    var patientSignature = document.getElementById("patient-signature").value;
    var reportDate = document.getElementById("date-input").value;

    var prescriptionContent = `
        <div class="container report-box">
            <h2 class="text-center">Prescription</h2>
            <p>Patient's Name: ${patientName}</p>
            <p>Patient ID: ${medicalId}</p>
            <p>Phone Number: ${phoneNumber}</p>
            <p>Date of Birth: ${dateOfBirth}</p>
            <p>Heart Rate: ${heartRate} BPM</p>
            <p>Body Temperature: ${temperature} °C</p>
            <p>SpO2: ${spo2}%</p>
            <p>Diagnosis: ${diagnosis}</p>
            <p>Treatment: ${treatment}</p>
            <p>Additional Notes: ${notes}</p>
            <p>GP's Signature: ${gpSignature}</p>
            <p>Patient's Signature: ${patientSignature}</p>
            <p>Date of Report: ${reportDate}</p>
        </div>
    `;
    document.getElementById("prescription-content").innerHTML = prescriptionContent;
    document.getElementById("prescriptions").style.display = "block";
}



// Section toggles (final versions, avoid duplicates)
function showCurrentReport() {
    document.getElementById('current-report').style.display = 'block';
    document.getElementById('yearly-reports').style.display = 'none';
    document.getElementById('prescriptions').style.display = 'none';
}

function showYearlyReports() {
    document.getElementById('current-report').style.display = 'none';
    document.getElementById('yearly-reports').style.display = 'block';
    document.getElementById('prescriptions').style.display = 'none';
}

        function showPrescription() {
            document.getElementById('current-report').style.display = 'none';
            document.getElementById('yearly-reports').style.display = 'none';
            document.getElementById('prescriptions').style.display = 'block';
        }

        function showPatientForm() {
          document.getElementById('patientForm').style.display = 'block';
          document.getElementById('doctorForm').style.display = 'none';
       }
     
       function showDoctorForm() {
          document.getElementById('doctorForm').style.display = 'block';
          document.getElementById('patientForm').style.display = 'none';
       }

        function showPatientInfo() {
            var patientName = document.getElementById("patientName").value;
            var medicalID = document.getElementById("medicalID").value;
            var patientPassword = document.getElementById("patientPassword").value;

            var patientInfo = document.getElementById("patientInfo");
            patientInfo.innerHTML = "<h2>Patient Information</h2>" +
                                    "<p>Name: " + patientName + "</p>" +
                                    "<p>Medical ID: " + medicalID + "</p>" +
                                    "<p>Password: " + patientPassword + "</p>";

            patientInfo.style.display = "block";
        }

        function showDoctorInfo() {
            var doctorName = document.getElementById("doctorName").value;
            var doctorMedicalID = document.getElementById("doctorMedicalID").value;
            var doctorPassword = document.getElementById("doctorPassword").value;

            var doctorInfo = document.getElementById("doctorInfo");
            doctorInfo.innerHTML = "<h2>Doctor Information</h2>" +
                                    "<p>Name: " + doctorName + "</p>" +
                                    "<p>Medical ID: " + doctorMedicalID + "</p>" +
                                    "<p>Password: " + doctorPassword + "</p>";

            doctorInfo.style.display = "block";
        }
        
 function login() {
            // Perform login validation here
            // For now, just show the index section
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("indexSection").style.display = "block";
            return false; // Prevent form submission
        }