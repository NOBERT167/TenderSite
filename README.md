#Tender Website
This repository contains the initial version of a tender website where users can view various subscription plans, log in or register (functionality in progress), and access exclusive tenders. Below is an overview of the pages that have been created, along with a description of additional functionality required to complete the project.

##Pages Created
**1. Landing Page**
The landing page introduces users to the website and includes:

**An overview of the tender service.**
	1. Subscription plans with different pricing options,
	2. A "How It Works" section explaining the process to new users,
	3. Call-to-action buttons for users to either sign up or log in,

**2. Login/Registration Page**
Currently, the login and registration functionality is not fully implemented. Users can see the forms but **cannot:**
Create an account yet.
Log in to access their dashboard or the tenders page.
The next steps include setting up full user authentication and integrating it with a database.

**3. Tenders Page**
The tenders page is where logged-in users can view a list of tenders. This page will allow users to:

View tenders relevant to their selected preferences (industries, regions, deadlines).
Access full tender details.
Note: At this stage, the page is accessible to all users, even those who are not logged in. Restrictions on access based on login status are still to be implemented.

##Additional Functionality Needed
To complete the project, the following functionality can be added:

**1. User Authentication**
Implement a fully functional login and registration system.
Users should be able to create accounts and log in securely.
Restrict access to the tenders page, ensuring only logged-in users can view it.
Enable session management so users stay logged in across different pages.

**3. Database Setup**
User Database: Implement a database to store user information, including registration details and login credentials.
Tender Database: Implement a database to store tender listings, including relevant details (title, description, region, deadline, etc.).

**4. Subscription Management**
Allow users to subscribe to different plans and save this information in the database.
Users should be able to manage their subscription plans (upgrade, downgrade, or cancel).

**5. Security Measures**
Encrypt passwords before storing them in the database (e.g., using hashing algorithms like bcrypt).
Protect sensitive data and ensure secure login sessions (e.g., using HTTPS).

**6. Future Enhancements**
Add user notifications (via email or SMS) for new tenders.
Implement a profile management page for users to update their information and preferences.
Create an admin dashboard for managing tenders and user data.

##How to Run the Project
Clone this repository:
==git clone https://github.com/NOBERT167/TenderSite.git==
Navigate to the project directory:
==cd ./TenderSite==


##Future Features
**In addition to the core functionality listed above, future versions may include:**

- Advanced filtering and sorting options for tenders.
- User dashboard with subscription management.
- Integration with payment gateways for handling subscription fees.
- Improved UI/UX enhancements for better navigation and user experience.
