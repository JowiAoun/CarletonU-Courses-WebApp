import "../styles/styles.css";

import Comments from "../components/Comments";

export default function SpecificCoursePage() {
  const Course = {
    fives:6,
    fours:3,
    threes:2,
    twos:1,
    ones:0,
    code:"MATH1007",
    name:"Introduction to Calculus I",
    definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ultricies est, et malesuada leo. Maecenas feugiat lectus dui. Sed pretium magna in libero pharetra vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at maximus ante, at dignissim erat. Aliquam fermentum semper tortor, ut faucibus augue dapibus sit amet. Nullam accumsan urna et posuere tempor. Pellentesque varius facilisis tempor. Curabitur rhoncus luctus fringilla."
  };
  return (
    <>
      <div>
        <Comments />
      </div>
    </>
  );
}
