import React from "react";
import { useUsers } from "../../hooks/useUsers";
import UsersHeader from "./components/UsersHeader";
import UsersTable from "./components/UsersTable";
import UsersTableHeader from "./components/UsersTableHeader";
import UsersTableBody from "./components/UsersTableBody";
import UsersPagination from "./components/UsersPagination";

const Users = () => {
  const { users, loading, error, pagination, totalPages, goToPage } =
    useUsers();

  return (
    <div className="space-y-4">
      <UsersHeader total={pagination.total} />

      <UsersTable>
        <UsersTableHeader />

        <UsersTableBody users={users} loading={loading} error={error} />

        {!loading && !error && pagination.total > 0 && (
          <UsersPagination
            pagination={pagination}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}
      </UsersTable>
    </div>
  );
};

export default Users;
