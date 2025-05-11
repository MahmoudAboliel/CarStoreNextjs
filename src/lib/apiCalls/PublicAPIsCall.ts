import { AddReviewApiResponse, CountApiResponse, GetAdsApiResponse, GetMainInfoApiResponse, GetReviewsApiResponse, ProductsApiResponse, ProductsUserApiResponse, SettingsApiResponse, SingleProductApiResponse } from '@/lib/Dto'
import { DOMAIN } from "@/lib/constance"
import { toast } from 'react-toastify'

export const fetchSettings = async () => {
    try {
        
        const res = await fetch(`${DOMAIN}/Settings/Show`, {
            cache: 'no-store'
        })

        if (!res.ok) throw new Error("خطأ في جلب الإعدادات")
        
        const response = await res.json() as SettingsApiResponse
    
        if (response.errorMessage) throw new Error(`فشل في جلب الإعدادات ${response.errorMessage}`)

        return response.data

    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
}

export async function fetchProducts(pageNumber: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/ShowSixCars/${pageNumber}`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error("خطأ في جلب المنتجات")
    
        const response = await res.json() as ProductsApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب المنتجات ${response.errorMessage}`)

        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب المنتجات ${error}`)
    }
}

export async function fetchProductsCount() {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/Count`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error("خطأ في جلب عدد السيارات")
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب عدد المنتجات ${response.errorMessage}`)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب عدد المنتجات ${error}`)
    }
}

export async function fetchProductsByUser(pageNumber: string, userId: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/ShowUserCars/${pageNumber}/${userId}`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error("خطأ في جلب المنتجات")
    
        const response = await res.json() as ProductsUserApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب المنتجات ${response.errorMessage}`)

        return { cars: response.data.cars, user: response.data.user }
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب المنتجات ${error}`)
    }
}

export async function fetchProductsCountByUser(userId: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/CountUserCars/${userId}`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error("خطأ في جلب عدد السيارات")
    
        const response = await res.json() as CountApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب عدد المنتجات ${response.errorMessage}`)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب عدد المنتجات ${error}`)
    }
}

export async function fetchSearchProducts(data: object) {
    try {

        const json = JSON.stringify(data)
        const res = await fetch(
        `${DOMAIN}/Car/ShowFilteredCars`, {
          method: 'POST',
          cache: 'no-store',
          body: json,
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        if (!res.ok) throw new Error(`خطأ في جلب المنتجات ${res.statusText}`)
    
        const response = await res.json() as ProductsApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب المنتجات ${response.errorMessage}`)

        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب المنتجات ${error}`)
    }
}
  
export async function fetchSingleProduct(productId: string) {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/ShowCar/${productId}`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error(`خطأ في جلب تفاصيل السيارة ${res.status} ${res.statusText}`)
    
        const response = await res.json() as SingleProductApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب تفاصيل السيارة ${response.errorMessage}`)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب تفاصيل السيارة ${error}`)
    }
}

export async function fetchLatestProducts() {
    try {
        const res = await fetch(
        `${DOMAIN}/Car/ShowNewCars`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error("خطأ في جلب أحدث السيارات ??")
    
        const response = await res.json() as ProductsApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب أحدث السيارات ${response.errorMessage}`)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب أحدث السيارات ${error}`)
    }
}

export async function fetchAds() {
    try {
        const res = await fetch(
        `${DOMAIN}/Ad/ShowAd`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error(`خطأ في جلب الإعلانات ${res.statusText} ??`)
    
        const response = await res.json() as GetAdsApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب الإعلانات ${response.errorMessage}`)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب الإعلانات ${error}`)
    }
}

export async function fetchReviews() {
    try {
        const res = await fetch(
        `${DOMAIN}/Settings/ShowFiveStars`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error("خطأ في جلب التعليقات")
    
        const response = await res.json() as GetReviewsApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب التعليقات ${response.errorMessage}`)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب التعليقات ${error}`)
    }
}

export async function addReview(Name:string, Number:string, Content:string, Stars:number, carId:number) {
    try {

        const review = {
            Name,
            Number,
            ContentMsg: Content,
            Stars
        }
        const res = await fetch(
        `${DOMAIN}/Car/AddComment/${carId}`, {
          method: 'POST',
          body: JSON.stringify(review),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        if (!res.ok) {
            
            toast.error(`خطأ في إضافة التعليق ${res.status} ${res.statusText}`)
            return
        }
    
        const response = await res.json() as AddReviewApiResponse
    
        if (response.errorMessage) {
            toast.error(`خطأ في إضافة التعليق ${response.errorMessage}`)
            return
        }
        
        toast.success(`تم إرسال التعليق إلى المسؤول`)
        
    } catch (error) {
        console.log(error)
    }
}

export async function addPublicReview(Name:string, Number:string, Content:string, Stars:number) {
    try {

        const review = {
            Name,
            Number,
            ContentMsg: Content,
            Stars
        }
        const res = await fetch(
        `${DOMAIN}/Car/AddComment`, {
          method: 'POST',
          body: JSON.stringify(review),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        if (!res.ok) {
            
            toast.error(`خطأ في إضافة التعليق ${res.status} ${res.statusText}`)
            return
        }
    
        const response = await res.json() as AddReviewApiResponse
    
        if (response.errorMessage) {
            toast.error(`خطأ في إضافة التعليق ${response.errorMessage}`)
            return
        }
        
        toast.success(`تم إرسال التعليق إلى المسؤول`)
        
    } catch (error) {
        console.log(error)
    }
}

export async function hitAd(adId: number) {
    try {
        const res = await fetch(
        `${DOMAIN}/Ad/Hit/${adId}`, {
          method: 'POST',
        })
    
        if (!res.ok)
            return
    
        const response = await res.json() as AddReviewApiResponse
    
        if (response.errorMessage) 
            return
        
    } catch (error) {
        console.log(error)
    }
}

export async function fetchMainInfo() {
    try {
        const res = await fetch(
        `${DOMAIN}/Settings/Dashboard`, {
          cache: 'no-store',
        })
    
        if (!res.ok) throw new Error("خطأ في جلب المعلومات")
    
        const response = await res.json() as GetMainInfoApiResponse
    
        if (response.errorMessage) throw new Error(`خطأ في جلب المعلومات ${response.errorMessage}`)
        
        return response.data
        
    } catch (error) {
        console.log(error)
        throw new Error(`خطأ في جلب المعلومات ${error}`)
    }
}