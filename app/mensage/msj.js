export const Acceso = (req,res,status=200,msj="") =>{
    res.status(status).json({
        error: true,
        status: status,
        body: msj
    }) 
}

export const Error = (req,res,status=300,msj="") =>{
    res.status(status).json({
        error: true,
        status:status,
        body: msj
    })
}
