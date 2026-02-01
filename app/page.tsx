import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import NotificationTicker from './components/NotificationTicker';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      
      <main className="grow">
        <Hero />

        <NotificationTicker />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-2 bg-orange-500 rounded-full" />
            <div>
              <h2 className="text-3xl font-black text-slate-800">मुख्य दालन</h2>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-[0.2em]">Main Portal Links</p>
            </div>
          </div>
          
          {/* Secondary Content Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">सरपंच संदेश (Sarpanch's Message)</h3>
                <p className="italic opacity-90 mb-4">"आमच्या गावाचा विकास हेच आमचे ध्येय आहे. आपण सर्वांनी मिळून गावाला डिजिटल आणि समृद्ध बनवूया."</p>
                <p className="font-bold">- मा. सरपंच, ग्रामपंचायत</p>
             </div>
             <div className="bg-white border p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">ताज्या घडामोडी</h3>
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <span className="text-orange-600 text-xs font-bold">FEB 01, 2026</span>
                    <p className="text-slate-700 font-medium">मोफत आरोग्य तपासणी शिबिर आयोजित.</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-orange-600 text-xs font-bold">JAN 28, 2026</span>
                    <p className="text-slate-700 font-medium">नवीन पाणी योजना मंजूर.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}