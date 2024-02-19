import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getKendaraan = async (req, res) => {
   const kendaraan = await prisma.dgs.findMany();
    return res.json(kendaraan);
}

export const getKendaraanById = async (req, res) => {
    const kendaraan =  await prisma.dgs.findUnique();

    return res.json(kendaraan);
}

export const createKendaraan = async (req, res) => {
    const kendaraan =  await prisma.dgs.findMany();
    return res.json(kendaraan);
}

export const editKendaraan = async (req, res) => {
    const kendaraan =  await prisma.dgs.findMany();
    return res.json(kendaraan);
}

export const deleteKendaraan = async (req, res) => {
    const kendaraan =  await prisma.dgs.delete();
    
    return res.json(kendaraan);
}