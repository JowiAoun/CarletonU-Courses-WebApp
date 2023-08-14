import "../styles/styles.css";

export default function CourseCard(props) {
  return (
    <div className="py-1">
      <a className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.code}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {props.level}
        </h5>
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
          {props.prereqs}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </a>
    </div>
  );
}
