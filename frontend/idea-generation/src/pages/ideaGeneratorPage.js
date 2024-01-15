import { useState } from "react";

const IdeaGeneratorPage = () => {
  const [targetAudience, setTargetAudience] = useState("");
  const [interest, setInterest] = useState("");

  return (
    <div>
      <div className="w-full my-20 flex flex-col gap-4 max-w-lg mx-auto">
        <div className="text-3xl text-center font-bold">
          Create Your Micro SaaS Idea
        </div>
        <div>
          <div className="font-semibold my-2">Target Audience</div>
          <input
            className="bg-gray-400 text-black w-full placeholder-white"
            type="text"
            placeholder="Shopify Merchants"
            onChange={(e) => setTargetAudience(e.target.value)}
            value={targetAudience}
          ></input>
        </div>
        <div>
          <div className="font-semibold my-2">Interest</div>
          <input
            className="bg-gray-400 text-black w-full placeholder-white"
            type="text"
            placeholder="AI SEO Tools"
            onChange={(e) => setInterest(e.target.value)}
            value={interest}
          ></input>
        </div>
        <div className="py-2 px-2 items-center font-semi-bold w-full text-md bg-pink-800 hover:bg-pink-600 rounded-md text-center ">
          Generate Description
        </div>
      </div>
    </div>
  );
};

export default IdeaGeneratorPage;
