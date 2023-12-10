export const setResponse  = (data, response) => {
    response.status(200)
        .json(data);
}

export const setErrorResponse  = (error, response) => {
    console.log(error)
    response.status(500)
        .json({
            code: "ServiceError",
            message: error.message
        })
}