import "../styles/styles.css";

function TextInBubble(bubble) {
  return (
    <div className="px-5">
      <div className=" bg-gray-500 rounded-3xl">
        <h5 className="px-2 mb-2 text-xl font-bold tracking-tight dark:text-white">
          {bubble.courseKey}: {bubble.text}
        </h5>
      </div>
    </div>
  );
}

function TopSection(top) {
  return (
    <div className="flex">
      <TextInBubble courseKey="Final Grade" text={top.finalGrade} />
      <TextInBubble courseKey="Year And Term" text={top.yearAndTerm} />
      <TextInBubble courseKey="Prof" text={top.prof} />
      <TextInBubble courseKey="Would Taken Again" text={top.wouldTakeAgain} />
    </div>
  );
}

function Comment(props) {
  return (
    <div className="px-60 py-2">
      <div className="block p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <TopSection
          finalGrade="A+"
          yearAndTerm="Fall 2022"
          prof="Minyi Huang"
          wouldTakeAgain="Yes"
        />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          comment will be here
        </p>
      </div>
    </div>
  );
}

export default function Comments(props) {
  return (
    <div className="pt-32">
      <Comment />
    </div>
  );
}
