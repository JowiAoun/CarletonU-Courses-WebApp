import "../styles/styles.css";

import Chart from "../components/Chart";
import Comments from "../components/Comments";
import TagsSection from "../components/TagsSection";
function Title() {
  <>
    <h1>MATH1007</h1>
    <h2>Intro do Calculus I</h2>
  </>;
}
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
      <div>
        <Chart />
        <div className="">
          <div className="justify-end flex text-white font-bold">
            <div>
              <h1 className="text-4xl">MATH1007</h1>
              <h1 className="text-2xl">Intro do Calculus I</h1>
            </div>
          </div>
          <div>
            <TagsSection />
          </div>
        </div>
      </div>
      <Comments />
    </>
  );
}
