import DeleteProduct from "@/lib/DeleteProduct";
import "./../style.css";
import Link from "next/link";
const Getproduct = async () => {
  try {
    let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"},{
      method: "GET",
      headers: {
        'Content-Type': 'application/json', // Adjust the content type if needed
      },
    });
    data = await data.json();

    if (data.success) {
      return data.result;
    } else {
      console.log("not found data");
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function page() {
  const productlist = await Getproduct();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product List Page</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Company</td>
            <td>Color</td>
            <td>Category</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
         
          {productlist.map((item)=>(
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price} ₹</td>
                <td>{item.company}</td>
                <td>{item.color}</td>
                <td>{item.category}</td>
                <td><Link href={"productlist/"+item._id}>Edit</Link></td>
                <td><DeleteProduct id={item._id}/></td>
              </tr>
            ))
           }

        </tbody>
      </table>
      <Link href="/addproduct">Go to Add Product</Link>
      <h2>Please Hard Refresh ctrl+Shift+R</h2>
    </div>
  );
}
