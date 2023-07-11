import "../styles/styles.css";

import CourseCard from "../components/CourseCard";

export default function Courses() {
  const Courses = [
    {
      code: "MATH1007",
      name: "Introduction to Calculus",
      definition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ultricies est, et malesuada leo. Maecenas feugiat lectus dui. Sed pretium magna in libero pharetra vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at maximus ante, at dignissim erat. Aliquam fermentum semper tortor, ut faucibus augue dapibus sit amet. Nullam accumsan urna et posuere tempor. Pellentesque varius facilisis tempor. Curabitur rhoncus luctus fringilla.",
    },
    {
      code: "COMP1405",
      name: "Introduction to Computer Science I",
      definition:
        "Phasellus accumsan felis eu justo tristique, et efficitur libero laoreet. Nam tincidunt mi ligula, vitae gravida lacus ullamcorper eget. Nunc maximus dictum ex, id vestibulum massa malesuada id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id venenatis erat. Quisque sed tincidunt sapien. Integer at varius mi. Sed faucibus sapien vel tellus scelerisque scelerisque. Suspendisse potenti. Nam commodo nisi urna. Donec tempor malesuada libero, sed tincidunt eros sodales id.",
    },
  ];
  return (
    <>
      <div className="w-full pt-20 px-96">
        {Courses.map((data) => (
          // eslint-disable-next-line react/jsx-key
          <CourseCard
            code={data.code}
            name={data.name}
            definition={data.definition}
          />
        ))}
      </div>
    </>
  );
}
