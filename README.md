# LeadManager MERN Stack Assignment

---

## Overview

This is a simple Lead Management application built using MERN stack. It includes the following features:

1. **Authentication**
   - Registration and Login.
   - All routes are private; users cannot access them without logging in.

2. **Agent Management**
   - Add new agents with validation for phone numbers.
   - View all agents in a responsive table.

3. **Customer Management**
   - Upload customers via CSV.
   - Customers are automatically distributed among agents.
   - View customers assigned to each agent.

4. **Dashboard**
   - Shows total agents, total customers, assigned and unassigned customers.
   - Chart for customers per agent.
   - Recent customers list.

5. **Responsive Design**
   - Works on desktop and mobile devices.
  
    ---
  
     ## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Context Api

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)

---

## ⚙️ Installation  

Clone the repository and install dependencies:  

```bash
# Clone repo
git clone https://github.com/ankit11556/lead-manager.git

# Frontend setup
cd frontend
npm install
npm run dev

# Backend setup
cd backend
npm install
npm start



