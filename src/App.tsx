import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Construction, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyMo Montessori svět</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Domů</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Produkty</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">O nás</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Kontakt</a>
          </nav>
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 text-gray-700 mr-4" />
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Domů</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Produkty</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">O nás</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Kontakt</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Vítejte v MyMo Montessori světě
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Objevte kvalitní Montessori materiály pro rozvoj vašeho dítěte
            </p>
          </div>

          <div className="mt-16 text-center">
            <Construction className="h-24 w-24 text-indigo-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stránka je ve výstavbě</h3>
            <p className="text-xl text-gray-600 mb-8">
              Omlouváme se za nepříjemnosti. Pracujeme na tom, abychom vám brzy přinesli skvělé Montessori materiály.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Upozorněte mě, až budeme připraveni
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            &copy; 2024 MyMo Montessori svět. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={() => setIsModalOpen(false)}>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Zůstaňte informováni</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Zadejte svůj e-mail a my vás upozorníme, až bude náš e-shop připraven.
                </p>
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="flex items-center border-b border-indigo-500 py-2">
                    <Mail className="text-gray-400 mr-2" />
                    <input 
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                      type="email" 
                      placeholder="Váš e-mail" 
                      aria-label="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button 
                    className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit"
                  >
                    {isSubmitted ? 'Odesláno!' : 'Odeslat'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;