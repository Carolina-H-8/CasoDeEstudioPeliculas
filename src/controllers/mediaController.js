
import {
    createMediaService,
    getMediaService
} from "../services/mediaService.js";

export const createMedia = async (req, res) => {
    try {
        // Recibe los datos enviados por el cliente
        const {
            serial,
            title,
            url,
            releaseYear,
            typeId,
            directorId,
            productionCompanyId
        } = req.body ?? {};

        // Validar campos obligatorios
        if (
            !serial ||
            !title ||
            !url ||
            releaseYear == null ||
            !typeId ||
            !directorId ||
            !productionCompanyId
        ) {
            return res.status(400).json({
                error: "Validación fallida",
                details: "Los campos serial, title, url, releaseYear, typeId, directorId y productionCompanyId son obligatorios"
            });
        }

        // Enviar los datos al servicio
        const media = await createMediaService({
            serial,
            title,
            url,
            releaseYear,
            typeId,
            directorId,
            productionCompanyId
        });

        return res.status(201).json(media);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Error al registrar película",
            details: error.message
        });
    }
};

export const getMedia = async (req, res) => {
    try {
        const mediaList = await getMediaService();
        return res.status(200).json(mediaList);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Error al obtener el catálogo de medios",
            details: error.message
        });
    }
};
