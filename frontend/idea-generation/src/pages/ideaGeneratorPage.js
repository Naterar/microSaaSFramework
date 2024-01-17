import { useState } from "react";
import createIdeaRequest from "../api/createIdeaRequest";

const ideaGeneratorResponse = [
  "Idea #1: Description",
  "Idea #2: Description",
  "Idea #3: Description",
];

const IdeaGeneratorPage = () => {
  const [targetAudience, setTargetAudience] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const ideas = await createIdeaRequest({ targetAudience, interest });
      console.log("Ideas:", ideas); // Process or set state with the ideas
    } catch (error) {
      console.error("Error submitting idea:", error);
      // Optionally set an error state and display it in the UI
    }
  };

  return (
    <div className="">
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
        <button
          className="py-2 px-2 items-center font-semi-bold w-full text-md bg-pink-800 hover:bg-pink-600 rounded-md text-center"
          onClick={handleSubmit}
        >
          Generate Description
        </button>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <div className="text-3xl">Your Ideas</div>
        {ideaGeneratorResponse.map((idea) => {
          const title = idea.split(":")[0];
          const description = idea.split(":")[1];

          return (
            <div className="my-4 text-center border border-white rounder py-2 px-4">
              <div className="font-bold underline uppercase text-lg">
                {title}
              </div>
              <div className="">{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IdeaGeneratorPage;
