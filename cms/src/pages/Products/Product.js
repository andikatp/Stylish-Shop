import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import sidebar_menu from "../../constants/sidebar-menu";
import SideBar from "../../components/Sidebar/Sidebar";
import "../styles.css";
import empty from "../../assets/images/empty.png";
import Loading from "../../helpers/Loading/Loading";
import {
  getProducts,
  deleteProduct,
  selectAllProducts,
} from "../../redux/productSlice";
import ProductAddModal from "./ProductAddModal";
import ProductEditModal from "./ProductEditModal";

const Product = () => {
  const products = useSelector(selectAllProducts);
  const { error, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [productId, setProductId] = useState(0);

  const toggleModalAdd = () => setModalAdd(!modalAdd);
  const toggleModalEdit = () => setModalEdit(!modalEdit);
  const priceConverter = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return <div>{formattedPrice}</div>;
  };
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const deletes = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id))
          .unwrap()
          .then((data) => {
            Swal.fire({
              icon: "success",
              title: data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: err.message,
              footer: err.stack,
            });
          });
      }
    });
  };

  const handleUpdate = (id) => {
    setProductId(id);
    toggleModalEdit();
  };

  return (
    <>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <div className="dashboard-content">
            <DashboardHeader />
            <div className="dashboard-content-container">
              <div className="dashboard-content-header">
                <h2>Product List</h2>
                <button className="rows-btn" onClick={toggleModalAdd}>
                  Add Product
                </button>
              </div>
              {loading ? (
                <div className="loading-animate">
                  <Loading />
                </div>
              ) : error ? (
                <p>{error}</p>
              ) : products.length !== 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>NAME</th>
                      <th>PRICE</th>
                      <th>DESCRIPTION</th>
                      <th>STOCK</th>
                      <th>IMAGE</th>
                      <th>COLORS</th>
                      <th>CATEGORIES</th>
                      <th>BRAND</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id}>
                        <td>
                          <span>{index + 1}</span>
                        </td>
                        <td>
                          <span>{product.name}</span>
                        </td>
                        <td>
                          <span>{priceConverter(product.price)}</span>
                        </td>
                        <td>
                          <span>{product.description}</span>
                        </td>
                        <td>
                          <span>{product.stock}</span>
                        </td>
                        <td>
                          <span>
                            {product.image.startsWith("http") ? (
                              <img
                                src={product.image}
                                style={{ width: "100px", height: "100px" }}
                                alt="Product"
                              />
                            ) : (
                              <img
                                src={`http://localhost:3000/uploads/${product.image}`}
                                style={{ width: "100px", height: "100px" }}
                                alt="Product"
                              />
                            )}
                          </span>
                        </td>
                        <td>
                          {product.colors &&
                            (!product.colors.length ? (
                              <span>No color</span>
                            ) : product.colors.length === 1 ? (
                              <span>{product.colors[0]}</span>
                            ) : product.colors.length === 2 ? (
                              <span>{product.colors.join(" & ")}</span>
                            ) : (
                              <span>
                                {product.colors.slice(0, -1).join(", ")}, &{" "}
                                {product.colors.slice(-1)}
                              </span>
                            ))}
                        </td>
                        <td>
                          {product.categories &&
                            product.categories.map((category) => (
                              <span key={category.id}>{category.name}</span>
                            ))}
                        </td>
                        <td>
                          {product.brands &&
                            product.brands.map((brand) => (
                              <span key={brand.id}>{brand.name}</span>
                            ))}
                        </td>
                        <td>
                          <div>
                            <button
                              onClick={() => deletes(product.id)}
                              className="action-btn-delete"
                            >
                              Delete
                            </button>
                            <button
                              className="action-btn-update"
                              onClick={() => handleUpdate(product.id)}
                            >
                              Update
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="empty">
                  <img src={empty} alt="" />
                  <h1>The table is empty! Try adding some!</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {modalAdd && <ProductAddModal toggleModalAdd={toggleModalAdd} />}
      {modalEdit && (
        <ProductEditModal
          toggleModalEdit={toggleModalEdit}
          productId={productId}
        />
      )}
    </>
  );
};

export default Product;
