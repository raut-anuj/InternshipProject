import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function User() {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      return response.json();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      return id;
    },

    onSuccess: (deletedId) => {
    queryClient.setQueryData(['users'], (oldUsers) => {
      return oldUsers.filter(
        (user) => user.id !== deletedId
      );
    });
},

    onError: (error) => {
      console.error(error);
      alert('Delete Request Failed');
    },
  });

  const updateMutation = useMutation({
  mutationFn: async (updatedUser) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    return response.json();
  },

  onSuccess: (updatedUser) => {
    queryClient.setQueryData(['users'], (oldUsers) =>
      oldUsers.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );
  },

  onError: (error) => {
    console.error(error);
  },
  });

  const addMutation = useMutation({
    mutationFn: async(newUser) => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: {
            'Content_Type' : 'application/json',
          },
          body: JSON.stringify(newUser),
        }
      );
      if (!response.ok) {
      throw new Error('Failed to add user');
    }
    return response.json();
  },
  onSuccess: (newUser) => {
    queryClient.setQueriesData([users], (oldUsers) => [
      ...oldUsers, 
      newUser,
    ]);
  },
  onError: (error) => {
    console.error(error);
  },
  }); 

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="border border-black p-2 mb-2 rounded w-64"
        >
          <h3>{user.name}</h3>

          {/* delete */}
          <button
          disabled={deleteMutation.ispending}
            onClick={() => 
               deleteMutation.mutate(user.id)}
               className="bg-red-500 text-white px-2 py-1 rounded"
          >{deleteMutation.ispending ? 'Deleting...' : 'Delete' }
          </button>

          {/* Upadte */}
          <button
          disabled={updateMutation.isPending}
              onClick={() =>
                updateMutation.mutate({
                  id: user.id,
                  name: 'Anuj Kumar',
                  email: user.email,
                })
              }
            >{updateMutation.isPending ? 'Updating' : 'Update'}
            </button>

          {/* Add */}
          <button
          disabled={addMutation.isPending}
            onClick={() => 
              addMutation.mutate({
                name: "Anuj Kumar",
                email: "abc@gmail.com",
              })
            }
          >
            {addMutation.isPending
            ? 'Adding...' : 'Add'
          }
          </button>

        </div>
      ))}
    </div>
  );
}

export default User;
