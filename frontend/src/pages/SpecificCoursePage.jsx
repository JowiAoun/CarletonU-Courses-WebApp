import "../styles/styles.css";

import Chart from "../components/Chart";
import Comments from "../components/Comments";
import TagsSection from "../components/TagsSection";
export default function SpecificCoursePage() {
  const Course = {
    fives: 6,
    fours: 3,
    threes: 2,
    twos: 1,
    ones: 0,
    code: "MATH1007",
    name: "Introduction to Calculus I",
    definition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ultricies est, et malesuada leo. Maecenas feugiat lectus dui. Sed pretium magna in libero pharetra vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at maximus ante, at dignissim erat. Aliquam fermentum semper tortor, ut faucibus augue dapibus sit amet. Nullam accumsan urna et posuere tempor. Pellentesque varius facilisis tempor. Curabitur rhoncus luctus fringilla.",
  };
  return (
    <>
      <div className="flex pt-10">
        <div className="w-1/2">
          <Chart />
        </div>
        <div className="w-1/2">
          <div className="pr-72">
            <div className="justify-end flex text-white font-bold">
              <div>
                <h1 className="justify-end flex text-7xl">MATH1007</h1>
                <h1 className="justify-end flex text-4xl">Introduction to Calculus I</h1>
              </div>
            </div>
            <TagsSection />
          </div>
        </div>
      </div>
      <Comments />
    </>
  );
}
