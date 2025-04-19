import { CarCardProps } from "@/lib/types";
import { Car } from "@/lib/Dto";

export function transformData(backendData: Car): CarCardProps  {
    return {
        id: backendData.id,
        imageUrl: backendData.img1, 
        brand: backendData.brand,
        price: backendData.price.toLocaleString(),
        isNew: backendData.status === 'New' ? true : false,
        attributes: {
            system: backendData.transmission,
            model: backendData.model,
            year: backendData.year,
            kilometers: backendData.kiloMetrage.toLocaleString(),
            fuel: backendData.fuel,
            engine: backendData.engine,
            color: backendData.color,
        },
        detailsLink: `/product/${backendData.id}`
    }
}