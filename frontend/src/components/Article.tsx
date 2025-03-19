import { Header } from "./Header";
import aiImage from "../assets/enterprise_ai-responsible_ai-f.png";

export const Article = () => {
  return (
    <>
      <Header />
      <div className="px-70 border-t-2 border-[#F2F2F2]">
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
        <div className="flex flex-col gap-y-8 mb-30">
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
          <div className="flex justify-center content-center bg-gray-300 p-6 rounded-lg shadow-xl">
            <iframe
              className="h-84 w-149 "
              src="https://www.youtube.com/embed/WP6z_X5d-Rw?si=_l-5jO_etiRuoCfm"
            ></iframe>
          </div>
          <p className="font-bold text-2xl">
            What can artificial general intelligence do?
          </p>
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
          <p>
            An AGI system should have the following abilities and understanding:
          </p>
          <ul className="list-disc list-inside">
            <li>Abstract thinking.</li>
            <li>Background knowledge.</li>
            <li>Common sense.</li>
            <li>Cause and effect.</li>
          </ul>
          <p>
            Practical examples of AGI capabilities include the following five:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Creativity. An AGI system would theoretically be able to read and
              comprehend human-generated code and improve it.
            </li>
            <li>
              Sensory perception. AGI would excel at color recognition, which is
              a subjective kind of perception. It would also be able to perceive
              depth and three dimensions in static images.
            </li>
            <li>
              Fine motor skills. An example of this includes grabbing a set of
              keys from a pocket, which involves a level of imaginative
              perception.
            </li>
            <li>
              Natural language understanding (NLU). The meaning of human
              language is highly context-dependent. AGI systems would possess a
              level of intuition that would enable NLU.
            </li>
            <li>
              Navigation. The existing Global Positioning System (GPS) can
              pinpoint a geographic location. Once fully developed, AGI would be
              able to project movement through physical spaces better than
              existing systems.
            </li>
          </ul>
          <p>
            AI researchers also anticipate that AGI systems will possess
            higher-level capabilities, such as being able to do the following:
          </p>
          <ul className="list-disc list-inside">
            <li>Handle various types of learning and learning algorithms.</li>
            <li>Create fixed structures for all tasks.</li>
            <li>Understand symbol systems.</li>
            <li>Use different kinds of knowledge.</li>
            <li>Understand belief systems.</li>
            <li>
              Engage in metacognition and make use of metacognitive knowledge.
            </li>
          </ul>
          <div className="flex justify-center p-4">
            <img className="h-130 w-150" src={aiImage} alt="AI" />
          </div>
          <p className="font-bold text-xl">AGI vs. AI: What's the difference?</p>
          <p>
            Existing artificial intelligence capabilities are referred to as
            narrow AI when compared with artificial general intelligence. AGI is
            theoretical, whereas narrow AI is in practical use today.
          </p>

          <p>
            AGI should theoretically be able to perform any task that a human
            can and exhibit a range of intelligence in different areas without
            human intervention. Its performance should be as good as or better
            than humans at solving problems in most areas.
          </p>

          <p>
            In contrast, weak AI excels at completing specific tasks or types of
            problems. Many existing AI systems use a combination of machine
            learning (ML), deep learning (a subset of machine learning),
            reinforcement learning and natural language processing (NLP) for
            self-improving and to solve specific types of problems. However,
            these technologies do not approach the cumulative ability of the
            human brain.
          </p>
        </div>
      </div>
    </>
  );
};
