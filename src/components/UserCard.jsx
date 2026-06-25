const UserCard = ({ user }) => {
  return (
    <div className="w-full h-full p-4">
      <h2 className="font-bold text-lg text-gray-800">
        {user.name}
      </h2>

      <p className="text-sm text-blue-600 mt-1">
        @{user.username}
      </p>

      <p className="text-xs text-gray-600 mt-2 break-all">
        {user.email}
      </p>
    </div>
  );
};

export default UserCard;