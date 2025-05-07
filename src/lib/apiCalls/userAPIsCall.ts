import { DOMAIN } from "@/lib/constance"
import { CountApiResponse, ProductsApiResponse } from "@/lib/Dto"
import { toast } from "react-toastify"

interface Res extends Omit<CountApiResponse, "data"> {
  data: string;
}

export async function fetchProducts(pageNumber: string, token: string, sold: number) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/ShowMyCars/${pageNumber}/${sold}`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب المنتجات")
    
        const response = await res.json() as ProductsApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)

        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error("خطأ في جلب المنتجات")
    }
}
  
export async function fetchProductsCount(token: string, sold: number) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/CountMyCars/${sold}`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب عدد السيارات")
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error("خطأ في جلب عدد السيارات")
    }
}

export async function deleteProduct(token: string, productId: number) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/Delete/${productId}`, {
          method: 'POST',
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) {
          console.log(`حدث خطأ في الطلب ${res.statusText}`)
          return
        }
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) {
          console.log(response.errorMessage)
          return
        }
        console.log(response.data)
        console.log('تم الحذف بنجاح')
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export async function sellProduct(token: string, productId: number) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/Sold/${productId}`, {
          method: 'POST',
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) {
          console.log(`حدث خطأ في الطلب ${res.statusText}`)
          return
        }

        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) {
          console.log(response.errorMessage)
          return
        }
        console.log(response.data)
        console.log('تم الطلب بنجاح')
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export async function addProduct(formData: FormData, token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/AddCar`, {
          method: 'POST',
          cache: 'no-store',
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) {
          toast.error(`حدث خطأ في الطلب ${res.statusText}`)
          return
        }

        const response = await res.json() as Res
    
        if (response.errorMessage) {
          toast.error(response.errorMessage)
          return
        }
        toast.success(response.data)
        // toast.success('تمت إضافة المنتج بنجاح')
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export async function editProduct(formData: FormData, token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/SaveEditCar`, {
          method: 'POST',
          cache: 'no-store',
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) {
          toast.error(`حدث خطأ في الطلب ${res.statusText}`)
          return
        }

        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) {
          toast.error(response.errorMessage)
          return
        }

        return response.data
        
    } catch (error) {
        console.log(error)
    }
}