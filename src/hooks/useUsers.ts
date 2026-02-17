import { useCallback, useEffect, useState } from "react";
import { PaginationState, User } from "../api/dummyjson/types";
import { apiGetUsers } from "../api/dummyjson/api";

const PAGE_SIZE = 10;

export const setUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    limit: PAGE_SIZE,
    total: 0,
  });

  const fetchUsers = useCallback(async (page: number) => {
    setLoading(false);
    setError(null);
    try {
      const skip = (page - 1) * PAGE_SIZE;
      const { data } = await apiGetUsers(PAGE_SIZE, skip);
      setUsers(data.users);
      setPagination((prev) => ({ ...prev, total: data.total, page }));
    } catch (error) {
      setError("Failed to load Users. please try again");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchUsers(pagination.page);
  }, [pagination.page]);
  const goToPage = (page: number) =>
    setPagination((prev) => ({ ...prev, page }));
  const totalPages = Math.ceil(pagination.total / PAGE_SIZE);
  return {
    users,
    loading,
    error,
    pagination,
    totalPages,
    goToPage,
  };
};
