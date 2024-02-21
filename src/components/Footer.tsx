const Footer = () => {
  return (
    <div className="bg-black w-screen text-white p-12 h-[20rem] flex flex-col justify-between">
      <div>
        {" "}
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img src="/assets/logo.png" height={48} width={50} />
            </div>
            <div className="text-2xl uppercase font-bold">EM laboratory</div>
          </div>
          <div className="flex font-2xl gap-4 items-center">
            <div>About</div>
            <div>Support</div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-300 flex justify-end text-xs text-slate-400 font-light py-2">
        <div>
          © 2024 Virtual Electromagnetics Laboratory. Indian Institute of
          Information Technology
        </div>
      </div>
    </div>
  );
};

export default Footer;
