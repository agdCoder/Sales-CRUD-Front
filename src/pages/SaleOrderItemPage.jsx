import { SALES_API_URL } from "../config/constants";
import useSaleOrderItem from "../hooks/useSaleOrderItem";
import { checkData, deleteData } from "../utils/modalValidator";
import ModalField from "../components/ModalField";
import ModalAdd from "../components/ModalAdd";
import ButtonAdd from "../components/ButtonAdd";
import { InputType, InputIconClassName } from "../config/constants";

const SaleOrderItemPage = () => {
  const {
    operation,
    title,
    sales,
    id,
    quantity,
    orderId,
    itemId,
    /*loading,
    error,*/
    getSales,
    openModal,
    setId,
    setQuantity,
    setOrderId,
    setItemId,
  } = useSaleOrderItem();

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <ButtonAdd openModal={openModal}></ButtonAdd>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>QUANTITY</th>
                  <th>ORDER</th>
                  <th>ITEM</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {sales?.map((sale) => (
                  <tr key={sale.id}>
                    <td>{sale.id}</td>
                    <td>{sale.quantity}</td>
                    <td>{sale.orderId}</td>
                    <td>{sale.itemId}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProducts"
                        onClick={() =>
                          openModal(
                            2,
                            sale.id,
                            sale.quantity,
                            sale.orderId,
                            sale.itemId
                          )
                        }
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          deleteData(sale.id, setId, SALES_API_URL, getSales)
                        }
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalAdd
        title={title}
        checkData={() =>
          checkData(
            {
              quantity,
              orderId,
              itemId,
            },
            id,
            operation,
            SALES_API_URL,
            getSales
          )
        }
      >
        <>
          <ModalField
            valueField={quantity}
            setValueField={setQuantity}
            placeholderValue="Quantity"
            idValue="quantity"
            typeValue={InputType.number}
            classIconValue={InputIconClassName.number}
          />
          <ModalField
            valueField={orderId}
            setValueField={setOrderId}
            placeholderValue="OrderId"
            idValue="orderId"
            typeValue={InputType.number}
            classIconValue={InputIconClassName.number}
          />
          <ModalField
            valueField={itemId}
            setValueField={setItemId}
            placeholderValue="ItemId"
            idValue="itemId"
            typeValue={InputType.number}
            classIconValue={InputIconClassName.number}
          />
        </>
      </ModalAdd>
    </div>
  );
};

export default SaleOrderItemPage;
