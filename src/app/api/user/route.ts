import { cookies } from "next/headers";

export async function GET() {
    const token = (await cookies()).get('token')?.value;

    const res = await fetch('http://rentacar.somee.com/api/Account/GetProfile', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await res.json();

    return Response.json(data);

}