import { useState, useCallback, useEffect } from "react";

import { SALES_API_URL } from "../config/constants";
import { sendGetRequest } from "../utils/fetchData";

function useSaleOrderItem() {
  const [operation, setOperation] = useState("");
  const [title, setTitle] = useState("");
  const [sales, setSales] = useState([]);
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderId, setOrderId] = useState("");
  const [itemId, setItemId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSales = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await sendGetRequest(SALES_API_URL);
      setSales(data?.saleOrderItems);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getSales();
  }, [getSales]);

  const openModal = (op, id, quantity, orderId, itemId) => {
    setId("");
    setQuantity("");
    setOrderId("");
    setItemId("");
    setOperation(op);
    if (op === 1) {
      setTitle("Add Sale");
    } else if (op === 2) {
      setTitle("Edit Sale");
      setId(id);
      setQuantity(quantity);
      setOrderId(orderId);
      setItemId(itemId);
    }
    window.setTimeout(function () {
      document.getElementById("quantity").focus();
    }, 500);
  };

  return {
    operation,
    title,
    sales,
    id,
    quantity,
    orderId,
    itemId,
    loading,
    error,
    getSales,
    openModal,
    setId,
    setQuantity,
    setOrderId,
    setItemId,
  };
}

export default useSaleOrderItem;
