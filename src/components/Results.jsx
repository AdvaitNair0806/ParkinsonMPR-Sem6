import React from 'react';
import { Activity, RefreshCcw, CheckCircle2, TrendingDown, Stethoscope } from 'lucide-react';
import { useTestContext } from '../context/TestContext';

const Results = ({ setActiveView }) => {
  const { resetTests } = useTestContext();

  const handleRestart = () => {
    resetTests();
    setActiveView('dashboard');
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto w-full">
      <header className="mb-8 text-center pb-8 border-b border-slate-200">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Analysis Complete</h1>
        <p className="text-slate-600 text-lg">Below are the AI-driven diagnostic features extracted from your evaluation.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
        {/* Placeholder Stat 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
           <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mb-4">
               <Activity className="w-6 h-6" />
           </div>
           <h3 className="text-slate-500 text-sm font-medium mb-1">Tremor Frequency (Spiral)</h3>
           <div className="text-3xl font-bold text-slate-900 mb-2">4.2 <span className="text-lg font-normal text-slate-500">Hz</span></div>
           <p className="text-xs text-slate-400">Placeholder model output</p>
        </div>

        {/* Placeholder Stat 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
           <div className="p-3 bg-purple-50 text-purple-600 rounded-lg mb-4">
               <Stethoscope className="w-6 h-6" />
           </div>
           <h3 className="text-slate-500 text-sm font-medium mb-1">HNR Ratio (Voice)</h3>
           <div className="text-3xl font-bold text-slate-900 mb-2">12.8 <span className="text-lg font-normal text-slate-500">dB</span></div>
           <p className="text-xs text-slate-400">Placeholder model output (Harmonics-to-Noise)</p>
        </div>

        {/* Placeholder Stat 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
           <div className="p-3 bg-red-50 text-red-600 rounded-lg mb-4">
               <TrendingDown className="w-6 h-6" />
           </div>
           <h3 className="text-slate-500 text-sm font-medium mb-1">Jitter/Shimmer</h3>
           <div className="text-3xl font-bold text-slate-900 mb-2">1.04<span className="text-lg font-normal text-slate-500">%</span></div>
           <p className="text-xs text-slate-400">Placeholder acoustic perturbation</p>
        </div>

      </div>
      
      <div className="flex justify-center">
         <button 
           onClick={handleRestart}
           className="flex items-center px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-slate-50 rounded-xl font-medium transition-all focus:ring-4 focus:ring-blue-100"
         >
           <RefreshCcw className="w-5 h-5 mr-3" />
           Start New Evaluation
         </button>
      </div>

    </div>
  );
};

export default Results;
