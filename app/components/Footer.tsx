import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white font-bold text-xl mb-4 text-orange-500">ग्रामपंचायत कलंभा</h3>
          <p className="text-sm leading-relaxed">
            सोनोली, ता. काटोल, जिल्हा- नागपूर ४४१३०५. <br/>
            आपल्या सेवेसाठी तत्पर.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-4 text-lg">संपर्क (Contact)</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3"><MapPin size={16} className="text-orange-500"/> ग्रामपंचायत भवन, सोनोली</div>
            <div className="flex items-center gap-3"><Mail size={16} className="text-orange-500"/> gpkalambha@gmail.com</div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 text-lg">कार्यालयीन वेळ</h3>
          <p className="text-sm">सोमवार ते शनिवार: ०९:४५ - ०६:१५</p>
          <p className="text-xs mt-2 text-slate-500 italic">शासकीय सुट्ट्या दिवशी कार्यालय बंद राहील.</p>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-6 text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
        © २०२६ ग्रामपंचायत कलंभा. सर्व हक्क राखीव.
      </div>
    </footer>
  );
}