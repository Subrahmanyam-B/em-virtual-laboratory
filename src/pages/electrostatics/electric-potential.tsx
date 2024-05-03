import { Button } from "@/components/ui/button";

const ElectricPotentialPage = () => {
  return (
    <div className="px-48 flex flex-col border-t border-slate-300">
      <div className="flex justify-center py-10">
      {/* <iframe
      scrolling="no"
      src="https://www.geogebra.org/classic/he6NNjVT?embed"
      width="1180px"
      height="627px"
    >
    </iframe> */}
      </div>
      <div className="text-xl font-black uppercase text-center py-10">
      Electric Potential
      </div>
{/* 
      <div>
        1. The Differential elements in spherical coordinates can be found as:
      </div>
      <div>2. The Differential normal surface area is</div>
      <div>3. The Differential Volume is</div> */}

      <div className="flex justify-end mb-48">
        <Button className="px-6">Next</Button>
      </div>
    </div>
  );
};

export default ElectricPotentialPage;
