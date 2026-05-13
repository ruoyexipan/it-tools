export async function onRequest(context) {
  const { request } = context;
  
  // Get IP from Cloudflare headers
  const ip = request.headers.get('cf-connecting-ip') || 
             request.headers.get('x-real-ip') || 
             request.headers.get('x-forwarded-for')?.split(',')[0] || 
             'unknown';
  
  // Get basic info from Cloudflare
  const city = request.headers.get('cf-ip-city') || '';
  const region = request.headers.get('cf-region') || '';
  const country = request.headers.get('cf-ipcountry') || '';
  const timezone = request.headers.get('cf-timezone') || '';
  const org = request.headers.get('cf-as-organization') || '';
  const asn = request.headers.get('cf-asn') || '';

  let geoData = {
    city: city || '',
    region: region || '',
    country: country || '',
    org: org || '',
    timezone: timezone || '',
    asn: asn || '',
  };

  // If Cloudflare doesn't have location data, try external API
  if (!geoData.city && ip !== 'unknown') {
    try {
      const geoResponse = await fetch(`https://ipinfo.io/${ip}/json`, {
        headers: { 'Accept': 'application/json' },
      });
      if (geoResponse.ok) {
        const geo = await geoResponse.json();
        geoData = {
          city: geo.city || geoData.city,
          region: geo.region || geoData.region,
          country: geo.country || geoData.country,
          org: geo.org || geoData.org,
          timezone: geo.timezone || geoData.timezone,
          asn: geo.org || geoData.asn,
        };
      }
    } catch (e) {
      // Ignore errors
    }
  }

  // If still no data, try another API
  if (!geoData.city && ip !== 'unknown') {
    try {
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      if (geoResponse.ok) {
        const geo = await geoResponse.json();
        if (!geo.error) {
          geoData = {
            city: geo.city || geoData.city,
            region: geo.region || geoData.region,
            country: geo.country_name || geoData.country,
            org: geo.org || geoData.org,
            timezone: geo.timezone || geoData.timezone,
            asn: geo.asn || geoData.asn,
          };
        }
      }
    } catch (e) {
      // Ignore errors
    }
  }

  const data = {
    ip,
    city: geoData.city || 'N/A',
    region: geoData.region || 'N/A',
    country: geoData.country || 'N/A',
    org: geoData.org || 'N/A',
    timezone: geoData.timezone || 'N/A',
    asn: geoData.asn || 'N/A',
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
