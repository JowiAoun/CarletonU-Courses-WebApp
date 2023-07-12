import "../styles/styles.css";

import Chart from "../components/Chart";
import Comments from "../components/Comments";
import TagsSection from "../components/TagsSection";
import BarChart from "../components/BarChart";

export default function SpecificCoursePage() {
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
