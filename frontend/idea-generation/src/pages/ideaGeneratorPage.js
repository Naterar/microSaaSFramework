import { useState } from "react";

const IdeaGeneratorPage = () => {
  const [targetAudience, setTargetAudience] = useState("");
  const [interest, setInterest] = useState("");

  return (
    <div>
      <div className="">
        <div>Create Your Micro SaaS Idea</div>
        <input
          className="bg-gray-400 text-black"
          type="text"
          placeholder=""
          onChange={(e) => setTargetAudience(e.target.value)}
          value={targetAudience}
        ></input>
        <input
          className="bg-gray-400 text-black"
          type="text"
          placeholder=""
          onChange={(e) => setInterest(e.target.value)}
          value={interest}
        ></input>
        <div className="">Button</div>
      </div>
    </div>
  );
};

export default IdeaGeneratorPage;
