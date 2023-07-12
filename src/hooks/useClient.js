import { useState, useCallback, useEffect } from "react";

import { ITEMS_API_URL } from "../config/constants";
import { sendGetRequest } from "../utils/fetchData";

function useClient() {
  const [operation, setOperation] = useState("");
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getItems = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await sendGetRequest(ITEMS_API_URL);
      setItems(data?.items);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const openModal = (op, id, name, price, stock, supplierId) => {
    setId("");
    setName("");
    setPrice("");
    setStock("");
    setSupplierId("");
    setOperation(op);
    if (op === 1) {
      setTitle("Add Item");
    } else if (op === 2) {
      setTitle("Edit Item");
      setId(id);
      setName(name);
      setPrice(price);
      setStock(stock);
      setSupplierId(supplierId);
    }
    window.setTimeout(function () {
      document.getElementById("name").focus();
    }, 500);
  };

  return {
    operation,
    title,
    items,
    id,
    name,
    price,
    stock,
    supplierId,
    loading,
    error,
    getItems,
    openModal,
    setId,
    setName,
    setPrice,
    setStock,
    setSupplierId,
  };
}

export default useClient;
