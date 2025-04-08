import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;