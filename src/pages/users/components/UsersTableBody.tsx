import React from "react";
import { User } from "../../../api/dummyjson/types";
import UsersSkeleton from "./UsersSkeleton";
import { FixedSizeList as VirtualList } from "react-window";
import UserRow from "./UserRow";

interface UsersTableProps {
  users: User[];
  loading: boolean;
  error?: string | null;
}
const ROW_HEIGHT = 64;

const UsersTableBody = ({ users, loading, error }: UsersTableProps) => {
  const LIST_HEIGHT = ROW_HEIGHT * 6.5;

  if (error) {
    return (
      <div className="flex items-center justify-center h-40 text-red-400 text-sm">
        {error}
      </div>
    );
  }

  if (loading) {
    return <UsersSkeleton />;
  }

  return (
    <VirtualList
      height={LIST_HEIGHT}
      itemCount={users.length}
      itemSize={ROW_HEIGHT}
      itemData={users}
      width="100%"
    >
      {UserRow}
    </VirtualList>
  );
};
export default UsersTableBody;
