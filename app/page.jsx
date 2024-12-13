import TopicsList from "@/components/TopicsList";
import AddTask from "@/components/AddTask";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">MERN CRUD App</h1>
            </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <AddTask />
        <TopicsList />
        </div>
    </div>
  </div>
  </div>
  );
}
