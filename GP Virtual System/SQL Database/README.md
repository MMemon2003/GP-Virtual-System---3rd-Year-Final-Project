🛢️ SQL – GP Virtual System Database
This folder contains the database scripts used in the GP Virtual System project.
The database is built using MySQL and is designed to store and manage patient and doctor records, along with health monitoring data.

📌 Purpose of the Database
Store user login details (doctors, patients, and administrators).
Manage registered patients and doctors.
Record health data (temperature, blood pressure, heart rate, etc.).
Provide secure, structured, and reliable storage for the backend (Laravel) to interact with.

📂 SQL Files

table of doctors.sql → Stores patient details (name, age, medical ID, contact info).
table of patients.sql → Stores doctor details (name, specialty, ID, contact info).
health_records.sql → Stores patient health data (temperature, BP, heart rate, etc.).


🔗 Integration with Backend

The Laravel backend connects to this database using the .env file.
Example configuration in .env:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=health_system
DB_USERNAME=root
DB_PASSWORD=
