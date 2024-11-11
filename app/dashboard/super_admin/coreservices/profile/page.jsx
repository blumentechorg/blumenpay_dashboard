import CreateRoleForm from "@/components/Auth/CreateRole";
import CreateUserForm from "@/components/Auth/CreateUserForm";

export default function createUser() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
        <section className="pb-6 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Create User
          </h2>
          <CreateUserForm />
        </section>

        <section className="pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Assign Role
          </h2>
          <CreateRoleForm />
        </section>
      </div>
    </div>
  );
}
