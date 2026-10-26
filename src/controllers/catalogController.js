
import * as catalogService from '../service/catalogService.js';

// Recibe las solicitudes HTTP, llama al servicio y devuelve JSON.
const handleRequest = async (res, serviceMethod, status = 200) => {
    try {
        const result = await serviceMethod();
        return res.status(status).json(result);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Error procesando solicitud',
            details: error.message
        });
    }
};

// Géneros
export const createGenre = (req, res) => {
    if (!req.body?.name) {
        return res.status(400).json({
            error: 'El campo "name" es obligatorio'
        });
    }

    return handleRequest(
        res,
        () => catalogService.createGenreService(req.body),
        201
    );
};

export const getGenres = (req, res) =>
    handleRequest(res, () => catalogService.getGenresService());

// Directores
export const createDirector = (req, res) => {
    if (!req.body?.name) {
        return res.status(400).json({
            error: 'El campo "name" es obligatorio'
        });
    }

    return handleRequest(
        res,
        () => catalogService.createDirectorService(req.body),
        201
    );
};

export const getDirectors = (req, res) =>
    handleRequest(res, () => catalogService.getDirectorsService());

// Compañías de producción
export const createProductionCompany = (req, res) => {
    if (!req.body?.name) {
        return res.status(400).json({
            error: 'El campo "name" es obligatorio'
        });
    }

    return handleRequest(
        res,
        () => catalogService.createProductionCompanyService(req.body),
        201
    );
};

export const getProductionCompanies = (req, res) =>
    handleRequest(
        res,
        () => catalogService.getProductionCompaniesService()
    );

// Tipos
export const createType = (req, res) => {
    if (!req.body?.name) {
        return res.status(400).json({
            error: 'El campo "name" es obligatorio'
        });
    }

    return handleRequest(
        res,
        () => catalogService.createTypeService(req.body),
        201
    );
};

export const getTypes = (req, res) =>
    handleRequest(res, () => catalogService.getTypesService());
