import { request } from "../axios/axios";

//////////getAllCategory//////////
export function getAllCategory() {
  return request.get("/categories");
}
////////add from list////////////
export async function handleAddWishLish(id) {
  try {
    const result = await request.post(
      "/wishList",
      {
        products: id,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}
///////remove from list////////////
const user = JSON.parse(localStorage.getItem("user"));
export async function removeFromWishList(id) {
  try {
    const result = await request.patch(`/wishList/${user?._id}/${id}`, null, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}
