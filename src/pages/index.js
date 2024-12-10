import React from 'react';
import Head from 'next/head';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/layout/Footer';

 function Home() {
  return (
    <>
      <Head>
        <title>Aesthetic Task Manager</title>
        <meta name="description" content="A beautifully crafted task management application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="icon" 
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✒️</text></svg>"
        />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="w-full py-8 px-4">
          <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h1 className="vintage-heading text-4xl mb-2 text-center font-semibold">
            Aesthetic Task Manager
            </h1>
            <p className="text-[#065125]/70 mb-8 text-center font-serif italic">
              Organize your tasks with elegance
            </p>
            <TodoList />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 
export default Home;