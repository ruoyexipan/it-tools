export async function onRequest(context) {
  const { request } = context;
  
  // Get IP from Cloudflare headers
  const ip = request.headers.get('cf-connecting-ip') || 
             request.headers.get('x-real-ip') || 
             request.headers.get('x-forwarded-for')?.split(',')[0] || 
             'unknown';
  
  // Get location from Cloudflare headers
  const city = request.headers.get('cf-ip-city') || 'N/A';
  const region = request.headers.get('cf-region') || 'N/A';
  const country = request.headers.get('cf-ipcountry') || 'N/A';
  const timezone = request.headers.get('cf-timezone') || 'N/A';
  const latitude = request.headers.get('cf-iplatitude') || 'N/A';
  const longitude = request.headers.get('cf-iplongitude') || 'N/A';
  
  const data = {
    ip,
    city,
    region,
    country,
    timezone,
    latitude,
    longitude,
    org: request.headers.get('cf-as-organization') || 'N/A',
    asn: request.headers.get('cf-asn') || 'N/A',
  };
  
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Cache-Control': 'no-cache',
    },
  });
}
