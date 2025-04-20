import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import moment from 'moment';

const MainTable = ({ users, onDelete }) => {
  return (
    <div className="w-full overflow-x-auto mt-4">
      <table className="min-w-full text-xs md:text-base text-center">
        <thead className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white">
          <tr>
            <th className="w-auto px-2 py-2 sm:px-4">ID</th>
            <th className="w-auto px-2 py-2 sm:px-4">Full Name</th>
            <th className="px-2 py-2 sm:px-4 hidden sm:table-cell">Gender</th>
            <th className="px-2 py-2 sm:px-4 hidden sm:table-cell">Country</th>
            <th className="px-2 py-2 sm:px-4 hidden sm:table-cell">Age</th>
            <th className="px-2 py-2 sm:px-4 hidden sm:table-cell">Last Updated</th>
            <th className="w-auto px-2 py-2 sm:px-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="border-b hover:bg-gray-50 text-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <td className="w-auto px-2 py-2 sm:px-4 whitespace-nowrap">{index + 1}</td>
              <td className="w-auto px-2 py-2 sm:px-4 whitespace-nowrap">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-2 py-2 sm:px-4 capitalize hidden sm:table-cell">{user.gender}</td>
              <td className="px-2 py-2 sm:px-4 hidden sm:table-cell">{user.country}</td>
              <td className="px-2 py-2 sm:px-4 hidden sm:table-cell">{user.age}</td>
              <td className="px-2 py-2 sm:px-4 hidden sm:table-cell">
                {moment(user.updatedAt).fromNow()}
              </td>
              <td className="w-auto px-2 py-2 sm:px-4 flex justify-center space-x-1 sm:space-x-2">
                <Link
                  to={`/customers/${user._id}`}
                  className="p-1 sm:p-2 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
                  title="View details"
                >
                  <Eye size={16} />
                </Link>
                <Link
                  to={`/customers/edit/${user._id}`}
                  className="p-1 sm:p-2 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
                  title="Edit user"
                >
                  <Pencil size={16} />
                </Link>
                <button
                  onClick={() => onDelete(user._id)}
                  className="p-1 sm:p-2 rounded bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-600"
                  title="Delete user"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
