# Tender Website
This repository contains the initial version of a tender website where users can view various subscription plans, log in or register (functionality in progress), and access exclusive tenders. Below is an overview of the pages that have been created, along with a description of additional functionality required to complete the project.

## Pages Created
**1. Landing Page** <br />
The landing page introduces users to the website and includes: <br />

**An overview of the tender service.** <br />
	1. Subscription plans with different pricing options, <br />
	2. A "How It Works" section explaining the process to new users, <br />
	3. Call-to-action buttons for users to either sign up or log in, <br />

**2. Login/Registration Page** <br />
Currently, the login and registration functionality is not fully implemented. Users can see the forms but **cannot:** <br />
	-Create an account yet. <br />
	-Log in to access their dashboard or the tenders page. <br />
	-The next steps include setting up full user authentication and integrating it with a database. <br />

**3. Tenders Page** <br />
The tenders page is where logged-in users can view a list of tenders. This page will allow users to: <br />

View tenders relevant to their selected preferences (industries, regions, deadlines). <br />
Access full tender details. <br />
Note: At this stage, the page is accessible to all users, even those who are not logged in. Restrictions on access based on login status are still to be implemented. <br />

## Additional Functionality Needed <br />
To complete the project, the following functionality can be added: <br />

**1. User Authentication** <br />
Implement a fully functional login and registration system. <br />
Users should be able to create accounts and log in securely. <br />
Restrict access to the tenders page, ensuring only logged-in users can view it. <br />
Enable session management so users stay logged in across different pages. <br />

**3. Database Setup** <br />
User Database: Implement a database to store user information, including registration details and login credentials. <br />
Tender Database: Implement a database to store tender listings, including relevant details (title, description, region, deadline, etc.). <br />

**4. Subscription Management** <br />
Allow users to subscribe to different plans and save this information in the database. <br />
Users should be able to manage their subscription plans (upgrade, downgrade, or cancel). <br />

**5. Security Measures** <br />
Encrypt passwords before storing them in the database (e.g., using hashing algorithms like bcrypt).<br />
Protect sensitive data and ensure secure login sessions (e.g., using HTTPS). <br />

## 6. Future Enhancements <br />
Add user notifications (via email or SMS) for new tenders. <br />
Implement a profile management page for users to update their information and preferences. <br />
Create an admin dashboard for managing tenders and user data. <br />

## How to Run the Project
Clone this repository: <br />
<code>git clone https://github.com/NOBERT167/TenderSite.git</code> <br />
Navigate to the project directory: <br />
<code>cd ./TenderSite </code> <br />


## Future Features
**In addition to the core functionality listed above, future versions may include:** <br />

- Advanced filtering and sorting options for tenders. <br />
- User dashboard with subscription management. <br />
- Integration with payment gateways for handling subscription fees. <br />
- Improved UI/UX enhancements for better navigation and user experience. <br />
