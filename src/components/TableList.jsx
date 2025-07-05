import { useState, useCallback, useMemo, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";
import Table from "./Table";
import { ToastContainer, toast } from "react-toastify";

const TableList = () => {
  const url = "https://api-app-staging.wobot.ai/app/v1/fetch/cameras";
  const token = import.meta.env.VITE_API_TOKEN;

  const { data, error, isLoading } = useFetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const [cameraData, setCameraData] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setCameraData(data);
    }
  }, [data]);

  const [filters, setFilters] = useState({
    search: "",
    location: "",
    status: "",
  });

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const filteredData = useMemo(() => {
    if (!Array.isArray(cameraData)) return [];

    return cameraData.filter((cam) => {
      const matchesSearch =
        cam.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        cam.location.toLowerCase().includes(filters.search.toLowerCase()) ||
        cam.recorder.toLowerCase().includes(filters.search.toLowerCase());

      const matchesLocation =
        !filters.location ||
        filters.location === "All" ||
        cam.location === filters.location;

      const matchesStatus =
        !filters.status ||
        filters.status === "All" ||
        cam.status?.toLowerCase().trim() ===
          filters.status.toLowerCase().trim();

      return matchesSearch && matchesLocation && matchesStatus;
    });
  }, [cameraData, filters]);

  const paginatedCameras = useMemo(() => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, limit]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleUpdateStatus = async (id, newStatus) => {
    const url = "https://api-app-staging.wobot.ai/app/v1/update/camera/status";
    const option = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: newStatus }),
    };

    try {
      const res = await fetch(url, option);
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to update status");
      }
      setCameraData((prev) =>
        prev.map((camera) =>
          camera.id === id ? { ...camera, status: newStatus } : camera
        )
      );
      toast.success(`Status updated to ${newStatus}`);
    } catch (err) {
      toast.warning("Error updating status:", err.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <TableHeader filters={filters} updateFilter={updateFilter} />
      <Table data={paginatedCameras} handleUpdateStatus={handleUpdateStatus} />
      <Pagination
        total={filteredData.length}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ToastContainer />
    </div>
  );
};

export default TableList;
