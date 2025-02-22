const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Manage your crowdfunding campaigns and track progress.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
