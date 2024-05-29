import { db } from "../config/mysql"
import { Acceso, Error } from "../mensage/msj"

export const mostrarCitas = async(req, res) => {
    const id = req.params["id"];
    
    try {
        const resp = await db.query(`CALL SP_MOSTRAR_CITAS("${id}")`)

        Acceso(req,res,200,resp[0][0])
        
    } catch (error) {
        Error(req,res,300,error)
    }

}

export const listarcita = async(req,res) => {
    try {
        const resp = await db.query(`CALL SP_LISTAR()`)
        Acceso (req,res,200,resp[0][0])
    } catch (error) {
        Error (req,res,300,error)
    }
}

export const modificarcita = async(req,res) => {
    const {id,paciente} = req.body
    try {
        const resp = await db.query(`CALL SP_MODIFICAR("${id}","${paciente}")`)
        if (resp[0].affectedRows==1) {
            Acceso (req,res,200,"paciente modificado con exito")
        } else {
            Error (req,res,300,"paciente no de modifico con exito")
        }
    } catch (error) {
        Error (req,res,300,error)
    }
}

export const insertarcita = async(req,res) => {
    const {paciente} = req.body
    try {
        const resp = await db.query(`CALL SP_CREAR_CITAS("${paciente}")`)
        if (resp[0].affectedRows==1) {
            Acceso (req,res,200,"paciente creado con exito")
        } else {
            Error (req,res,300,"el paciente no se pudo crear")
        }
    } catch (error) {
        Error (req,res,300,error)
    }
}

export const eliminarcita = async(req,res) => {
    const {id} = req.body;
    try {
        const resp = await db.query(`CALL SP_ELIMINAR("${id}")`)
        if (resp[0].affectedRows==1) {
            Acceso (req,res,200,"paciente eliminado con exito")
        } else {
            Error (req,res,300,"paciente no fue eliminado")
        }
    } catch (error) {
        Error (req,res,300,error)
    }
}