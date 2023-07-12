import { useState, useCallback, useEffect } from "react";

import { ORDERS_API_URL } from "../config/constants";
import { sendGetRequest } from "../utils/fetchData";

function useOrder() {
  const [operation, setOperation] = useState("");
  const [title, setTitle] = useState("");
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getOrders = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await sendGetRequest(ORDERS_API_URL);
      setOrders(data?.orders);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const openModal = (op, id, customerId) => {
    setId("");
    setCustomerId("");
    setOperation(op);
    if (op === 1) {
      setTitle("Add Order");
    } else if (op === 2) {
      setTitle("Edit Order");
      setId(id);
      setCustomerId(customerId);
    }
    window.setTimeout(function () {
      document.getElementById("customerId").focus();
    }, 500);
  };

  return {
    operation,
    title,
    orders,
    id,
    customerId,
    loading,
    error,
    getOrders,
    openModal,
    setId,
    setCustomerId,
  };
}

export default useOrder;
