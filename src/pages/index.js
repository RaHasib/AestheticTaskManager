import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Loader from '../components/layout/Loader';
import { motion } from 'framer-motion';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
      
      {loading ? (
        <Loader />
      ) : (
        <motion.div 
          className="min-h-screen flex flex-col justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <main className="w-full py-4 px-4">
            <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <Header />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <TodoList />
              </motion.div>
            </div>
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default Home;