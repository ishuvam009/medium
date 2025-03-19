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
          <div className="text-slate-400">5 min read</div>
          <div className="text-slate-400">2 days ago</div>
        </div>
        <div className="mb-6">
          <p className="text-slate-500">18 March 2025</p>
        </div>
        <div className="flex flex-col gap-y-8">
          <p>
            Artificial general intelligence (AGI) is the representation of
            generalized human cognitive abilities in software so that, faced
            with an unfamiliar task, the AGI system could find a solution. The
            intention of an AGI system is to perform any task that a human being
            is capable of.
          </p>
          <p>
            Definitions of AGI vary because experts from different fields define
            human intelligence from different perspectives. Computer scientists
            often define human intelligence in terms of being able to achieve
            goals. Psychologists, on the other hand, often define general
            intelligence in terms of adaptability or survival.
          </p>
          <p>
            AGI is considered to be strong artificial intelligence (AI). Strong
            AI contrasts with weak or narrow AI, which is the application of
            artificial intelligence to specific tasks or problems. IBM's Watson
            supercomputer, expert systems and self-driving cars are examples of
            narrow AI.
          </p>
          <p className="font-bold text-2xl">What can artificial general intelligence do?</p>
          <p>
            AGI in computer science is an intelligent system with comprehensive
            or complete knowledge and cognitive computing capabilities. As of
            publication, no true AGI systems exist; they remain the stuff of
            science fiction. The theoretical performance of these systems would
            be indistinguishable from that of a human. However, the broad
            intellectual capacities of AGI would exceed human capacities because
            of its ability to access and process huge data sets at incredible
            speeds.
          </p>
          <p>
            True AGI should be capable of executing human-level tasks and
            abilities that no existing computer can achieve. Today, AI can
            perform many tasks but not at the level of success that would
            categorize them as human or general intelligence.
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
};
