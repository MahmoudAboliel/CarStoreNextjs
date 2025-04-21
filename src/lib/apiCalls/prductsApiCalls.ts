import { DOMAIN } from "@/lib/constance";


export async function getProducts(pageNumber: string | undefined) {
  const response = await fetch(
    `${DOMAIN}/Car/ShowSixCars/${pageNumber}`, 
    {
      cache: 'no-store',
      // update data every 50 second
      // next: {revalidate: 50}
    });

  if (!response.ok)
    throw new Error("Faild to Fetch Products");

  return response.json();
}
  
export async function getProductsCount() {
  const response = await fetch(
    `${DOMAIN}/Car/Count`, 
    { cache: 'no-store' });

  if (!response.ok) {

    console.log(response.headers.entries)
    throw new Error("Faild to Featch Products Count");
  }

  return response.json();
}

export async function getSingleProduct(productId: number) {
  
  const response = await fetch(
    `${DOMAIN}/Car/ShowCar/${productId}`, 
    {
      cache: 'no-store',
      // update data every 50 second
      // next: {revalidate: 50}
    });

  if (!response.ok) {
    console.log(response.statusText)
    throw new Error("Faild to Fetch Products");
  }

  return response.json();
  
}

