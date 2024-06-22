import { request } from "../axios/axios";
const user = JSON.parse(localStorage.getItem("user"));
//////////getAllCategory//////////
export function getAllCategory() {
  return request.get("/categories");
}
///////////////////
export async function getAllWishList() {
  const result =await request.get( `/wishList/${user?._id}` );
  return result
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
