import React from "react";
import { PaginationState } from "../../../api/dummyjson/types";
import Pagination from "../../../components/ui/Pagination";
interface UsersPaginationProps {
  pagination: PaginationState;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const UsersPagination = ({
  pagination,
  totalPages,
  onPageChange,
}: UsersPaginationProps) => {
  return (
    <div className="px-4 border-t border-slate-800">
      <Pagination
        currentPage={pagination.page}
        totalPages={totalPages}
        onPageChange={onPageChange}
        totalItems={pagination.total}
        pageSize={pagination.limit}
      />
    </div>
  );
};
export default UsersPagination;
