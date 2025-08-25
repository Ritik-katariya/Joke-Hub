# Jokes Hub

Jokes Hub is a full-stack web application built with [Next.js](https://nextjs.org/) that allows users to view, create, and browse programming and general jokes. It features a modern UI, joke type selection, and persistent storage using MongoDB.

## Features

- Browse random jokes by type (Programming, General, Knock-Knock, Dad)
- Create and submit your own jokes
- View jokes stored in the database
- Responsive and modern UI with Tailwind CSS
- API endpoints for fetching and creating jokes

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [Axios](https://axios-http.com/) for HTTP requests
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/joke-hub.git
   cd joke-hub
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your MongoDB URI:

   ```
   MONGODB_URI=your-mongodb-connection-string
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - Next.js app directory (pages, API routes)
- `src/components/` - React components (Joke display, Header, Footer, etc.)
- `src/lib/` - Database models and connection logic
- `public/` - Static assets

## API Endpoints

- `GET /api/jokes?type=programming` - Get a random joke of a specific type from the database
- `POST /api/jokes` - Create a new joke (JSON body: `{ setup, punchline, type }`)
- `GET /api/jokes/random` - Get a random joke from the database

## Customization

- Add more joke types by editing the `jokeTypes` array in the relevant components.
- Update the UI by modifying components in `src/components/`.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using Next.js and Vercel
