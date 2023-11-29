const baseURL = "https://api.integration.novacircle.com";

export async function GET(request: Request) {

}
export async function POST(request: Request) {
    const payload = await request.json();
    console.log('qre',payload);
    const res = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Platform: "web-admin",
        },
        body: JSON.stringify(payload),
      })
   
    const data = await res.json()
   console.log('data',data);
    return Response.json(data)
  }