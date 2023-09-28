

async function callApi( endpoint, token, method="GET" ){

    console.log('Calling API: ' + endpoint )

    const headers = {
        "Authorization": `Bearer ${token}`
    }

    const response = await fetch( 
        endpoint,
        { method, headers }
    );

    try{ 
        return response.json()
    } catch {
        return {}
    }
}

export { callApi };