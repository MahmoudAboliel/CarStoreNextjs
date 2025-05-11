import { DOMAIN } from "@/lib/constance"
import { CountApiResponse, ProductsApiResponse, GetusersApiResponse, GetReviewsApiResponse, GetAdsApiResponse } from "@/lib/Dto"
import { toast } from "react-toastify"

interface Res extends Omit<CountApiResponse, "data"> {
  data: string;
}

// Users APIS
export async function fetchUsers(pageNumber: string, token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/GetUsers/${pageNumber}`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب المستخدمين")
    
        const response = await res.json() as GetusersApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)

        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
}
  
export async function fetchUsersCount(token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/CountUsers`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب عدد المستخدمين")
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
}

export async function blockingUser(token: string, userId: string, type: "Active" | "DeActive") {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/${type}/${userId}`, {
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
        
        interface res extends Omit<CountApiResponse, "data"> {
          data: string;
        }
        const response = await res.json() as res
    
        if (response.errorMessage) {
            console.log(response.errorMessage)
            return
        } 
        console.log('تم تحديث حالة المستخدم بنجاح')
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export async function deleteUser(token: string, userId: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/${userId}`, {
          method: 'POST',
          cache: 'no-store',
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

// Products APIs
export async function fetchProducts(pageNumber: string, token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/GetAllCars/${pageNumber}`, {
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
        throw new Error(`${error}`)
    }
}
  
export async function fetchProductsCount(token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/CountAllCars`, {
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
        throw new Error(`${error}`)
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
      
      
      const response = await res.json() as Res
  
      if (response.errorMessage) {
          console.log(response.errorMessage)
          return
      } 
      console.log('تم حذف المنتج بنجاح')
      return response.data
      
  } catch (error) {
      console.log(error)
  }
}

// Reviews APIs
export async function fetchReviews(pageNumber: string, token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/ShowAllComments/${pageNumber}`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب التعليقات")
    
        const response = await res.json() as GetReviewsApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)

        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
}
  
export async function fetchReviewsCount(token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/CountComments`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب عدد التعليقات")
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
}

export async function handleReview(token: string, reviewId: number, type: 'ApproveComment' | 'DeclineComment') {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/${type}/${reviewId}`, {
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
        
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

// Ads APIs
export async function fetchAds(pageNumber: string, token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/ShowAds/${pageNumber}`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب الإعلانات")
    
        const response = await res.json() as GetAdsApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)

        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
}
  
export async function fetchAdsCount(token: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/CountAds`, {
          cache: 'no-store',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) throw new Error("خطأ في جلب عدد الإعلانات")
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) throw new Error(response.errorMessage)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
}

export async function addAd(formData: FormData, token: string) {
    try {
        // console.log(object)
        const res = await fetch(
        `${DOMAIN}/Admin/CreateAd`, {
          method: 'POST',
          cache: 'no-store',
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) {
            toast.error(`حدث خطأ ${res.statusText}`)
            return
        }
    
        const response = await res.json() as Res
    
        if (response.errorMessage) {
            toast.error(response.errorMessage)
            return
        }
        toast.success('تم الإضافة بنجاح')
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export async function deleteAd(token: string, adId: number) {
    try {
        const res = await fetch(
        `${DOMAIN}/Admin/DeleteAd/${adId}`, {
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
        
        const response = await res.json() as Res
    
        if (response.errorMessage) {
            console.log(response.errorMessage)
            return
        }
        
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}

// Settings API
export async function editSettings(token: string, formData: FormData) {
    try {
        const res = await fetch(
        `${DOMAIN}/Settings/Edit`, {
          method: 'POST',
          cache: 'no-store',
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!res.ok) {
            toast.error(`حدث خطأ في تعديل الإعدادات ${res.statusText}`)
            return
        }
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) {
            toast.error(response.errorMessage)
            return
        }
        
        toast.success("تم تعديل الإعدادات بنجاح")
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}

