# GP-Virtual-System---3rd-Year-Final-Project

The GP Virtual Monitoring System is a healthcare IoT project that allows patients to monitor vital signs (heart rate, temperature, blood pressure) and share them securely with their doctors via a web-based platform.

This repo contains:

📚 Full project documentation
=
💻 Frontend website (HTML, CSS, JS)
⚙️ Laravel backend
🗄 SQL database schemas
🔌 Hardware documentation

📖 Overall Design
=
The project is built around a health gadget connected to a microcontroller (ESP8266 / NodeMCU) that operates over 2.4GHz Wi-Fi.
It enables remote monitoring for individuals who cannot travel.
Patients can share their data with a GP or Doctor and even engage in virtual meetings.
ESP8266 ensures accurate health data collection, while HC-05 Bluetooth module supports communication with the SBM70 Blood Pressure Monitor (since ESP8266 doesn’t support Bluetooth natively).

🛠 Hardware Used
=
ESP8266 (NodeMCU) – Main microcontroller with Wi-Fi support.
SEN0203 Heart Rate Sensor – Measures patient’s pulse.
DS18B20 Temperature Sensor – Measures body temperature.
SBM70 Bluetooth Blood Pressure Monitor – Connected via HC-05 Bluetooth module.
OLED Display – For local readings.
PCB – Designed in Eagle CAD, fabricated via JLCPCB.
Both the DS18B20 and SEN0203 are integrated on a breadboard with ESP8266 and configured through Tasmota firmware.

💻 Software
=
Tasmota – Firmware to interface ESP8266 with sensors.
Node-RED – Data flow and integration with cloud/database.
Microsoft Azure – MQTT broker, cloud service for storage and visualization.
MySQL Database – Stores patient/doctor records and sensor readings
PHP Servers – Secure connection between website and database.
Laravel – Backend framework for authentication and scalability.
Frontend: HTML, CSS, JavaScript.

🗄 Database
=
SQL Server stores patient and doctor data.
Includes tables for:
login_table – usernames/passwords (hashed).
registered_patients – medical IDs & patient info.
registered_doctors – doctor info.
health_records – sensor data with timestamps.
This allows both real-time health monitoring and historic report access.

🔐 Security
=
Patient/Doctor websites require login authentication.
Access restricted to registered users only.
Invalid login attempts return an error message.
Data transmission secured via PHP + HTTPS.

🚀 Features
=
✅ Monitor Temperature (DS18B20), Heart Rate (SEN0203), and Blood Pressure (SBM70 + HC-05)
✅ Real-time updates via Tasmota + MQTT + Azure
✅ Secured login system for patients/doctors (Laravel + MySQL)
✅ Prescriptions & Appointments handled online
✅ Annual health records stored in database
✅ Support for virtual meetings with GP/Doctors

📂 Repository Layout
=
docs/ → Proposal, Report, Presentation, diagrams
html-css-js/ → Static website pages
laravel/ → Full Laravel backend
sql/ → MySQL schemas and example data
hardware/ → Sensor pinouts, schematics, PCB layout

⚙️ System Architecture
=
Sensors → ESP8266 (NodeMCU) → Tasmota
Tasmota → MQTT → Azure Cloud
Azure → SQL Database (Node-RED integration)
SQL → Laravel Backend
Frontend → HTML/CSS/JS pages

📊 Documents
=
📑 Proposal
📑 Report
📑 Presentation
