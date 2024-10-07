export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600">Unauthorized</h1>
      <p className="mt-4 text-gray-600">
        You do not have permission to view this page.
      </p>
    </div>
  );
}
