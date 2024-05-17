# GreenPaddle - Bicycle and Electric Vehicle Rental Platform

Welcome to GreenPaddle! This project is a bicycle and electric vehicle rental platform aimed at providing users with easy access to sustainable transportation options. Users can rent bicycles from a diverse range of options, purchase accessories, explore routes, stay updated on events, and even rent electric vehicles.

## Tech Stack
- **Frontend:** HTML, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Payment Gateway:** Razorpay

## Getting Started
1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Install MongoDB and ensure it's running on your system.
4. Navigate to the project directory and run `npm install` to install dependencies.
5. Set up your Razorpay payment gateway credentials.

   - Create a `.env` file in the root directory.
   - Add your Razorpay key and secret to the `.env` file:
     ```
     RAZORPAY_KEY_ID=your_razorpay_key
     RAZORPAY_KEY_SECRET=your_razorpay_secret
     ```

6. Set up your MongoDB connection string.

   - Add your MongoDB connection URL to the `.env` file:
     ```
     DATABASE=your_mongodb_connection_url
     ```

7. Run `npm start` to start the server.
8. Visit `http://localhost:80` in your web browser to access the website.

## Features
- **Bicycle Rental:** Users can choose from a wide variety of bicycles for rent.
- **Electric Vehicle Rental:** Explore electric vehicles as a sustainable transportation option.
- **Accessories:** Purchase accessories to enhance your biking experience.
- **Routes:** Discover routes for biking adventures.
- **Contact Us:** Get in touch with us for inquiries and support.
- **Events:** Stay updated on biking events and community gatherings.
- **Peer-to-Peer Rental:** Users can also offer their own electric vehicles and bicycles for rent to others.
