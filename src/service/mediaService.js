
import { prisma } from '../lib/prisma.js';

export const createMediaService = async (data) => {
    const {
        genreIds = [],
        ...mediaData
    } = data;

    return await prisma.media.create({
        data: {
            ...mediaData,

            genres: {
                create: genreIds.map((id) => ({
                    genre: {
                        connect: { id }
                    }
                }))
            }
        },
        include: {
            type: true,
            director: true,
            productionCompany: true,
            genres: {
                include: {
                    genre: true
                }
            }
        }
    });
};

export const getMediaService = async () => {
    return await prisma.media.findMany({
        include: {
            type: true,
            director: true,
            productionCompany: true,
            genres: {
                include: {
                    genre: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};
