import { Button } from "@/components/ui/button";

const ElectricDipolePage = () => {
  return (
    <div className="px-48 flex flex-col border-t border-slate-300">
      <div className="text-xl font-black uppercase text-center py-10">
        Electric Dipole
      </div>
      <div className="flex justify-end mb-48">
        <Button className="px-6">Next</Button>
      </div>
    </div>
  );
};

export default ElectricDipolePage;
