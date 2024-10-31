Here’s a comprehensive README for your video streaming app:
Tubespace - Lightweight Video Streaming App

Tubespace is a minimal, lightweight video streaming application built with a Java backend and a React frontend, leveraging the YouTube Data API to fetch and display video content. The app allows users to search YouTube videos, view them in an embedded player, and navigate results with pagination.
Features

    Video Search: Search YouTube videos by keyword.
    Responsive Video Player: View videos in a modern embedded player.
    Pagination: Fetch and display 6 videos per page with "Next" and "Previous" navigation.
    Download Button (Demo/Experimental): Option to download videos directly (for educational use only).
    Minimalist Design: Clean and modern UI with essential features.

Tech Stack

    Frontend: React
    Backend: Java (Spring Boot) with an optional Node.js microservice for video download
    API: YouTube Data API v3

Prerequisites

    Node.js and npm installed.
    Java (JDK 11+).
    YouTube API Key (Get API Key).

Getting Started
1. Clone the Repository

bash

git clone https://github.com/SibusisoLucas26/SPACETUBE.git
cd Tubespace

2. Set Up Backend
Java Spring Boot Backend

    Navigate to the backend directory:

    bash

cd backend

Create an application.properties file in src/main/resources with your YouTube API Key:

properties

youtube.api.key=YOUR_YOUTUBE_API_KEY

Build and run the Spring Boot application:

bash

    ./mvnw spring-boot:run

(Optional) Node.js Microservice for Download

    Navigate to the backend/download-service directory (if configured):

    bash

cd backend/download-service

Install dependencies:

bash

npm install

Run the server:

bash

    node server.js

        Note: The download feature uses ytdl-core and is for educational use only. Verify compliance with YouTube's Terms of Service.

3. Set Up Frontend

    Navigate to the frontend directory:

    bash

cd ../frontend

Install dependencies:

bash

npm install

Create a .env file in the frontend directory and add your backend URL:

plaintext

REACT_APP_BACKEND_URL=http://localhost:8080

Run the React development server:

bash

    npm start

Usage

    Open the app in your browser at http://localhost:3000.
    Use the search bar to search for videos on YouTube.
    Click on a video to play it in the embedded player.
    Use the "Next" and "Previous" buttons to navigate through paginated results.
    Use the download button (for demonstration purposes only) to download a video.

Project Structure

plaintext

spacetube
├── backend                   # Java Spring Boot Backend
│   ├── src
│   ├── pom.xml               # Maven config
│   └── application.properties # API configuration
├── frontend                  # React Frontend
│   ├── public
│   ├── src
│   ├── .env                  # Frontend environment variables
│   └── package.json
└── README.md

Key Components
Frontend (React)

    SearchBar: Search component with custom layout (title, search input, and download link).
    VideoList: Lists 6 videos per page, with pagination support.
    VideoPlayer: Displays selected video with a "Download" button.

Backend (Java Spring Boot)

    YouTube API Integration: Fetches video data using YouTube Data API.
    Node.js Download Service (Optional): Provides direct download support.

API Usage
YouTube Data API v3

    Search Endpoint: Fetches videos matching the search query.
    Pagination: Manages video retrieval in batches of 6.

Note: YouTube Data API has usage limits, so ensure proper error handling.
Roadmap

Implement user authentication
Add user playlists and watch history
Implement favorite videos list

    Enhance video download options with quality selection

License

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

    YouTube Data API for video data.
    React and Spring Boot for powering the frontend and backend.
    ytdl-core for educational video download functionality.
