import { Button } from "react-bootstrap";
import { url } from "../../axios/axios";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link, useNavigate } from "react-router-dom";
import formatCurrency from "../formatcurrency";
import { handleAddWishLish, removeFromWishList } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setWishList } from "../../slice/slice";
import { toast } from "react-toastify";
import Rating from "../../ui/Rating";

export default function ProductItem({
  product,
  hoverProduct,
  handleMouseOver,
  handleMouseOut,
  offer,
}) {
  const { getItemsQuantity, increaseQuantity, decreaseQuantity, removeItem } =
    useShoppingCart();

  const quantity = getItemsQuantity(product._id);

  const navigate = useNavigate();

  ////////////function handle Add WishList/////////////
  const dispatch = useDispatch();

  async function addWishLish(id) {
    const result = await handleAddWishLish(id);
    dispatch(setWishList(result?.data?.data?.products));
  }

  /////////////remove wish list////////
  async function handleRemove(id) {
    const result = await removeFromWishList(id);
    if (result) {
      dispatch(setWishList(result?.data?.data?.products));
    }
  }
  //////////wishlist from redux//////////
  const favorite = useSelector((state) => state?.favoriteproducts?.products);

  return (
    <div
      className=""
      onMouseOver={() => handleMouseOver(product._id)}
      onMouseOut={handleMouseOut}
    >
      <div className="product overflow-hidden px-2 py-3 cursor-pointer position-relative">
        <img
          className="w-100"
          src={`${url}/img/${product.image}`}
          alt="product"
        />
        <h5 className=" text-main mt-3">
          {product.name.split(" ").slice(0, 3).join(" ")}
        </h5>
        <div className=" mb-3">
          <div className="flex justify-between items-center">
            <p>{formatCurrency(product.price)}$</p>
            {offer ? (
              <p className="text-gray-800 text-decoration-line-through">
                {product.priceAfterOffer}$
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center mb-14">
            <Rating rating={product?.Rate} />
          </div>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => {
              if (localStorage.getItem("token")) {
                increaseQuantity(product);
                toast("Product Added Successfully to your Card!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                navigate("/login");
              }
            }}
            className={`${
              hoverProduct === product._id ? "d-block" : "d-none"
            } btn bg-main text-white showbutton mb-4`}
          >
            +Add To Cart
          </button>
        ) : (
          <div
            className={`w-100 ${
              hoverProduct === product._id ? "d-block" : "d-none"
            }`}
          >
            <div className="d-flex align-items-center justify-content-center">
              <Button
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    increaseQuantity(product);
                    toast.success(
                      "Product Increased Quantity Successfully to your Card!",
                      {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                  } else {
                    navigate("/login");
                  }
                }}
                size="sm"
                variant="secondary"
                className="me-3 w-75"
              >
                +
              </Button>
              <span className="fs-6 fw-bold">{quantity}</span>
              <Button
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    decreaseQuantity(product);
                    toast.info("Product Decreased Quantity!", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  } else {
                    navigate("/login");
                  }
                }}
                size="sm"
                variant="secondary"
                className="ms-3 w-75"
              >
                -
              </Button>
            </div>
            <Button
              onClick={() => {
                if (localStorage.getItem("token")) {
                  removeItem(product);
                  toast.warn("Product Already Removed fronm your Cart!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                } else {
                  navigate("/login");
                }
              }}
              variant="danger"
              className="mt-2 w-100"
            >
              Remove
            </Button>
          </div>
        )}

        <div className="icons">
          <button className="btn-icon favourit">
            {favorite?.length > 0 &&
            favorite.find((e) => e._id === product?._id) ? (
              <i
                className="fa-solid fa-heart iconwishfavourit"
                onClick={() => handleRemove(product?._id)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart iconwish"
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    addWishLish(product?._id);
                  } else {
                    navigate("/login");
                  }
                }}
              ></i>
            )}
          </button>
          <Link to={`/details/${product._id}`}>
            <i className="fa-regular fa-eye icondetails"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
