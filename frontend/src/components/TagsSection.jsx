import "../styles/styles.css";

function TextInBubble(bubble) {
  return (
    <div className="px-2">
      <div className=" bg-gray-500 rounded-3xl">
        <h5 className="px-2 mb-2 text-2xl font-bold tracking-tight dark:text-white">
          {bubble.number} {bubble.text}
        </h5>
      </div>
    </div>
  );
}
export default function TagsSection() {
  return (
    <>
    <div className="pt-5 justify-end flex">
      <div className="justify-end flex flex-wrap">
        <TextInBubble number={10} text={"Do the Homework"} />
        <TextInBubble number={20} text={"Lecture Heavy"} />
        <TextInBubble number={30} text={"Sleep in Class"} />
        <TextInBubble number={30} text={"Easy concepts"} />
        <TextInBubble number={30} text={"Memorization"} />
        <TextInBubble number={30} text={"Should have grade 12 review"} />
      </div>
    </div>
    </>
  );
}
