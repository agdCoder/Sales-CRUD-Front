import { ITEMS_API_URL } from "../config/constants";
import useClient from "../hooks/useClient";
import { checkData, deleteData } from "../utils/modalValidator";
import ModalField from "../components/ModalField";
import ModalAdd from "../components/ModalAdd";
import ButtonAdd from "../components/ButtonAdd";
import { InputType, InputIconClassName } from "../config/constants";

const ItemsPage = () => {
  const {
    operation,
    title,
    items,
    id,
    name,
    price,
    stock,
    supplierId,
    /*loading,
    error,*/
    getItems,
    openModal,
    setId,
    setName,
    setPrice,
    setStock,
    setSupplierId,
  } = useClient();
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
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>SUPPLIER</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {items?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      ${new Intl.NumberFormat("en-US").format(item.price)}
                    </td>
                    <td>{item.stock}</td>
                    <td>{item.supplierId}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProducts"
                        onClick={() =>
                          openModal(
                            2,
                            item.id,
                            item.name,
                            item.price,
                            item.stock,
                            item.supplierId
                          )
                        }
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          deleteData(item.id, setId, ITEMS_API_URL, getItems)
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
              name,
              price,
              stock,
              supplierId,
            },
            id,
            operation,
            ITEMS_API_URL,
            getItems
          )
        }
      >
        <>
          <ModalField
            valueField={name}
            setValueField={setName}
            placeholderValue="Name"
            idValue="name"
            typeValue={InputType.text}
            classIconValue={InputIconClassName.text}
          />
          <ModalField
            valueField={price}
            setValueField={setPrice}
            placeholderValue="Price"
            idValue="price"
            typeValue={InputType.number}
            classIconValue={InputIconClassName.money}
          />
          <ModalField
            valueField={stock}
            setValueField={setStock}
            placeholderValue="Stock"
            idValue="stock"
            typeValue={InputType.number}
            classIconValue={InputIconClassName.number}
          />
          <ModalField
            valueField={supplierId}
            setValueField={setSupplierId}
            placeholderValue="SupplierId"
            idValue="supplierId"
            typeValue={InputType.number}
            classIconValue={InputIconClassName.number}
          />
        </>
      </ModalAdd>
    </div>
  );
};

export default ItemsPage;
