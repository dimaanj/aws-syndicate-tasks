exports.handler = async (event) => {
    console.log("Request headers:", event.headers);
    console.log("Request method:", event.requestContext.http.method);
    console.log("Request path: ", event.rawPath);

    if(event.rawPath !== '/hello') {
        return {
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${event.rawPath}. HTTP method: ${event.requestContext.http.method}`
        }
    }
    
    const response = {
        statusCode: 200,
        message: 'Hello from Lambda',
    };
    return response;
};
