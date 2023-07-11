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
export default function TagsSection(tags) {
  return (
    <>
    <div className="justify-end flex">
      <div className="flex">
        <TextInBubble number={10} text={"Ohio"} />
        <TextInBubble number={20} text={"New York"} />
        <TextInBubble number={30} text={"Yes"} />
      </div>
    </div>
    </>
  );
}
