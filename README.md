# Hire AI

Welcome to Hire AI! This project is an HR tool designed to make recruiting fast and easy with the help of AI agents.

This document provides an overview of the project structure, architecture, and a guide on how to get started and continue development.

## Architecture Overview

- **Monorepo**: The project is structured as a monorepo using npm workspaces, containing the `frontend` and `backend` packages.
- **Frontend**: Built with Next.js and follows the **Feature-Sliced Design (FSD)** architecture for scalability and maintainability.
- **Backend**: A serverless architecture using **AWS Lambda** for custom business logic and AI processing.
- **Database & Auth**: **Supabase** is used for the PostgreSQL database, user authentication, and real-time capabilities. The frontend will interact directly with Supabase for most data operations.

## Folder Structure

Here is a detailed breakdown of the folder structure:

```
/
|-- packages/
|   |-- frontend/         # Next.js frontend application
|   |   |-- src/
|   |   |   |-- app/        # FSD 'app' & 'pages' layers: Routing, global styles, providers
|   |   |   |-- widgets/    # FSD 'widgets' layer: Composite UI components (e.g., Header, VacancyList)
|   |   |   |-- features/   # FSD 'features' layer: User interactions (e.g., login, AI generation)
|   |   |   |-- entities/   # FSD 'entities' layer: Business entities (e.g., Candidate, Vacancy)
|   |   |   `-- shared/     # FSD 'shared' layer: Reusable code, UI kit, configs, API clients
|   |   `-- package.json
|   |
|   `-- backend/          # AWS Serverless functions
|       |-- functions/      # Directory for individual Lambda functions
|       |   `-- README.md   # Explanation of backend functions
|       `-- package.json
|
|-- package.json          # Root package.json for monorepo workspace configuration
`-- README.md             # This file
```

### Frontend: Feature-Sliced Design (FSD) Explained

FSD organizes the code by business domain (slices) and responsibility (layers). The key rule is that higher layers can use lower layers, but not the other way around.

- **`shared`**: The lowest layer. Contains code that is not specific to the project's business logic.
  - `shared/ui`: Your UI component library (Buttons, Inputs, Modals).
  - `shared/api`: API clients, like the Supabase client instance.
  - `shared/lib`: Helper functions, hooks, and utilities.
  - `shared/config`: Application-wide configurations.

- **`entities`**: Represents core business entities.
  - Examples: `candidate`, `vacancy`, `user`.
  - Each entity has its own folder (a "slice") and can contain `ui`, `model` (for state management), and `api` (for data fetching) segments.
  - Example: `entities/candidate/ui/CandidateCard.tsx` would be a component to display candidate info.

- **`features`**: Contains functionality that provides value to the user. These features often operate on `entities`.
  - Examples: `ai-generate-description`, `add-candidate-comment`, `auth-by-email`.
  - They combine `entities` and `shared` components to create interactive elements.

- **`widgets`**: Composite, standalone blocks for the UI. They assemble `features` and `entities` into larger sections of a page.
  - Examples: `Header`, `CandidateKanbanBoard`, `VacancyList`.

- **`app`**: The top layer. It initializes the app, sets up routing, global styles, and providers. In our Next.js project, this corresponds to the `src/app` directory. The pages themselves are composed of `widgets`.

### Backend Explained

The `packages/backend/functions` directory will hold the source code for your AWS Lambda functions. Since Supabase handles the database, auth, and basic API, these functions should be reserved for specific tasks that can't be done in Supabase, such as:
- **AI Processing**: Calling services like OpenAI to generate job descriptions or score resumes.
- **Third-Party Integrations**: Handling webhooks from job boards like hh.ru or LinkedIn.
- **Complex Business Logic**: Performing heavy computations or long-running tasks.

## How to Continue Building Your Project

Here is a recommended roadmap for development:

### 1. Set Up Supabase
1.  Go to [supabase.com](https://supabase.com), create a new project.
2.  Use the SQL editor to design your database schema. You will need tables for `vacancies`, `candidates`, `users`, `comments`, etc.
3.  Grab your Project URL and `anon` key from the API settings.

### 2. Configure Frontend
1.  Create a `.env.local` file in `packages/frontend`.
2.  Add your Supabase credentials to it:
    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_PROJECT_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
    ```
3.  Initialize the Supabase client in `packages/frontend/src/shared/api/supabase.ts`.

### 3. Build Bottom-Up (FSD Approach)
Follow the FSD hierarchy from bottom to top. This ensures that dependencies are built before the components that need them.

1.  **`shared/ui`**: Start by building a basic set of generic, reusable UI components (your UI kit). Create `Button`, `Input`, `Card`, `Modal`, etc.
2.  **`entities`**: Define your core data models. For each entity (`candidate`, `vacancy`), create:
    - **API Logic (`api/`):** Write functions to fetch data from Supabase.
    - **State Management (`model/`):** (Optional) Set up state management logic if needed (e.g., with Zustand or Redux Toolkit).
    - **UI Components (`ui/`):** Create components that display the entity's data (e.g., `CandidateCard`, `VacancyRow`).
3.  **`features`**: Implement user actions. For example, create the `create-vacancy` feature, which would use `shared/ui` components (like `Button` and `Input`) and call the `entities/vacancy` API logic.
4.  **`widgets`**: Compose features and entities into larger UI blocks. For example, the `VacancyList` widget would map over data fetched via the `entities/vacancy` logic and render a list of `VacancyRow` components.
5.  **`app` (Pages)**: Finally, assemble your pages (e.g., `/dashboard`) by arranging the `widgets` you've built.

### 4. Develop Backend Functions
When you need to implement an AI feature:
1.  Choose a service (e.g., Amazon Bedrock, OpenAI).
2.  Inside `packages/backend/functions`, create a new folder for your function (e.g., `generate-description`).
3.  Write the Lambda handler code (e.g., in Node.js) to interact with the AI API.
4.  Use the Serverless Framework or AWS SAM to deploy the function to AWS Lambda.
5.  You can trigger this Lambda from your frontend via an API Gateway endpoint or directly from Supabase using database webhooks.

This structured approach will help you build a robust and scalable application. Good luck!
