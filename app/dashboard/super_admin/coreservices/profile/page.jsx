import CreateRoleForm from "@/components/Auth/CreateRoleForm";
import CreateUserForm from "@/components/Auth/CreateUserForm";

export default function createUser() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8 place-items-center">
      <section className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
        <CreateUserForm />
      </section>

      <section className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
        <CreateRoleForm />
      </section>
    </div>
  );
}
