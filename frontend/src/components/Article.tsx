import { Header } from "./Header";

export const Article = () => {
  return (
    <>
      <Header />
      <div className="px-70">
        <div>
          <div className="py-4">
            <p className="font-bold text-3xl">
              AI Popular Myth Of Achieving Perfect AGI Versus Harsh Reality We
              Truly Face
            </p>
          </div>
          <div>
            <p className="font-medium text-lg text-slate-500">
              AGI is AI that is considered on par with human intellect and can
              seemingly match our intelligence.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-6 py-6">
          <div className="flex items-center justify-center w-8 h-8 bg-slate-400 rounded-full">
            S
          </div>
          <div className="">Shuvam</div>
        </div>
        <div className="mb-6">
          <p className="text-slate-500">18 March 2025</p>
        </div>
        <div>
          <p>
            Artificial general intelligence is a type of highly autonomous
            artificial intelligence that matches or surpasses human cognitive
            capabilities across most or all economically valuable work or
            cognitive labor. This contrasts with narrow AI, which is limited to
            specific tasks.
          </p>
        </div>
      </div>
    </>
  );
};
