const UserCard = ({ user }) => {
  return (
    <div className="w-full h-full p-4 bg-[#f1f5f9] border rounded-xl shadow-sm">
      <h2 className="font-bold text-lg text-gray-800 whitespace-nowrap">
        {user.name}
      </h2>

      <p className="text-sm text-blue-600 mt-1 whitespace-nowrap">
        @{user.username}
      </p>

      <p className="text-xs text-gray-600 mt-2 whitespace-nowrap">
        {user.email}
      </p>
    </div>
  );
};

export default UserCard;