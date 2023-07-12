import { ORDERS_API_URL } from "../config/constants";
import useOrder from "../hooks/useOrder";
import { checkData, deleteData } from "../utils/modalValidator";
import ModalField from "../components/ModalField";
import ModalAdd from "../components/ModalAdd";
import ButtonAdd from "../components/ButtonAdd";
import { InputType, InputIconClassName } from "../config/constants";

const OrdersPage = () => {
  const {
    operation,
    title,
    orders,
    id,
    customerId,
    /*loading,
    error,*/
    getOrders,
    openModal,
    setId,
    setCustomerId,
  } = useOrder();

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
                  <th>CUSTOMER</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {orders?.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customerId}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProducts"
                        onClick={() => openModal(2, order.id, order.customerId)}
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          deleteData(order.id, setId, ORDERS_API_URL, getOrders)
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
              customerId,
            },
            id,
            operation,
            ORDERS_API_URL,
            getOrders
          )
        }
      >
        <>
          <ModalField
            valueField={customerId}
            setValueField={setCustomerId}
            placeholderValue="CustomerId"
            idValue="customerId"
            typeValue={InputType.number}
            classIconValue={InputIconClassName.number}
          />
        </>
      </ModalAdd>
    </div>
  );
};

export default OrdersPage;
