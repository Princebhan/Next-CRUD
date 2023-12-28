"use client"
import { useRouter } from "next/navigation";

function DeleteProduct(props) {
    let routers=useRouter();
    console.log(props.id);
    const deleterecord=async()=>{
        let res=await fetch("http://localhost:3000/api/products/"+props.id,{
            method:"DELETE"
        })
        res=await res.json()
        if(res.success){
            alert("Product Delete")
            routers.push("/productlist");
        }
    }
  return (
<button onClick={deleterecord}>Delete</button>      
    
  )
}

export default DeleteProduct
