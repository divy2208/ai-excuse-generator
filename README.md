AI Excuse Generator
A web application that uses artificial intelligence to generate creative and believable excuses for various situations.

Live Application Link
You can try the live application here: https://aquamarine-froyo-d5cb72.netlify.app/

About The Application
This project is a simple tool designed to solve a common problem: needing a good excuse on the spot. The user enters a situation into a single input box (for example, "my boss for missing the deadline"), and the application provides a relevant, AI-generated excuse.

How It Works
The application has two main parts: a frontend and a backend AI service.

The Frontend
The user interface is built with React, a popular JavaScript library for creating interactive web pages. The project is bundled and optimized using Vite, a modern and fast build tool that makes the website quick to load and run. The frontend is responsible for capturing the user's input and displaying the final excuse.

The Backend AI Service
The "brain" of the application is Google's Gemini AI. The frontend does not run the AI model itself. Instead, it sends the user's input to the Gemini API. A custom prompt in the code instructs the AI to first analyze the user's request to understand the context, and then generate a suitable excuse. This API-based approach allows the application to be very lightweight while still using a powerful AI model.

Deployment
This project is deployed and hosted using Netlify. Netlify is a cloud platform that makes it easy to publish web projects. It connects directly to the project's GitHub repository, automatically builds the Vite application, and makes it available online through a shareable link.
