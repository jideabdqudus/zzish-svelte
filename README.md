# ZZISH Virtual Language Tutor Assigment

- Svelte Application:

## Links

- [Vercel](https://zzish-svelte.vercel.app/)

## Tech Stack

- Framework: Svelte
- Styling: Tailwind

## Installation

1. Clone the repository

2. Ensure the project runs within the desired node engine:
   `nvm use`

3. Install dependencies
   `npm install`

4. Run development server
   `npm run dev`

5. For testing
   `npm run test`

## App Breakdown

1. User Interface (UI)

Main Page: Welcomes users and provides a call-to-action to start learning.

Step Form: Guides users through a series of steps to gather information about their language preferences, goals, and learning levels.

Chat Interface: Allows users to interact with the AI assistant, send messages, and receive responses.

2. Key Components

`` – Displays the user's progress through the steps.

`` – Shows the current step title and navigation options.

`` – Displays relevant content such as language options or learning goals.

`` – A button to proceed to the next step in the form.

`` – Displays the selected language and user level in the chat interface.

`` – Renders chat messages exchanged between the user and the AI.

`` – Provides an input field for users to type and send messages.

`` – Contains navigation options, such as a link to return home.

3. State Management

Uses Svelte Stores (writable) to manage user data, including:

Answers to language-related questions.

Selected language and language code.

Chat history and AI interactions.

Enables reactive updates across components.

4. API Integration

Chat API: The application interacts with a +server.js API, using the Open AI LLM (e.g., /api/chat) to:

Process user messages.

Generate AI-powered responses tailored to the selected language and learning level.

## Potential Future Enhancements

If additional time were available, the following features would be implemented:

1. User Authentication – Enable personalized learning progress tracking.

2. Unit Tests – Improve test coverage for all components and API interactions.

3. Voice Input & Output – Support for speech recognition and text-to-speech responses.

4. Interactive Exercises – Gamified quizzes and language challenges.

5. Feedback Mechanism – Allow users to rate AI responses for better adaptation.

6. Gamification – Achievements, badges, and progress rewards.

7. Multimedia Support – Audio clips, images, and video-based learning.

8. AI Enhancements – Fine-tune the AI model for improved language guidance.
