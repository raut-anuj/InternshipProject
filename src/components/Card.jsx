import { Users, FileDown } from "lucide-react";

export default function Card({
      users,
      documents,
      title,
}) {

  return (
    <div className="bg-[#f3f0fd] rounded-3xl flex flex-col lg:flex-row items-center justify-between p-5 mb-7 max-w-150 mx-auto gap-2">

      <div className="space-y-7">

        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 text-violet-600 mt-1" />

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              {users}
            </h2>

            <p className="text-xl mt-2">
              Registered Users
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FileDown className="w-8 h-8 text-violet-600 mt-1" />

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              {documents}
            </h2>

            <p className="text-xl mt-2">
              Issued Documents
            </p>
          </div>
        </div>

      </div>

      <div className="relative">
        <div className="w-[180px] h-[180px] rounded-full bg-white flex items-center justify-center shadow-sm">

            <h3 className="text-violet-600 font-semibold text-xl">
              {title}
            </h3>
          </div>

        </div>
      </div>
  );
}