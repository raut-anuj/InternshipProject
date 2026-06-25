const Card = ({ user }) => {

  return (
    <div className="rounded-xl border p-4 shadow-md">
      <h2 className="text-lg font-semibold">
        {user.name}
      </h2>

      <p className="text-gray-600">
        {user.email}
      </p>
    </div>
  );
};

export default Card;