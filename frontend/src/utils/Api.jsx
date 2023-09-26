

async function callApi( endpoint, headers={"Content-Type": "application/json"}, method="GET", body=null ){
    const options = { method, headers, body }

    console.log('Calling API: ' + endpoint )
    console.log(options)

    const response = await fetch( 
        endpoint,
        { method, headers, body }
    );

    try{ 
        return response.json()
    } catch {
        return {}
    }
}

export { callApi };