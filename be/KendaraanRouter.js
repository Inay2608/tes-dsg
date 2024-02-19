import express from "express";

import {
    getKendaraan,
    getKendaraanById,
    createKendaraan,
    editKendaraan,
    deleteKendaraan
} from "./KendaraanController.js"


const router = express.Router();

router.get('/kendaraan', getKendaraan);
router.get('/kendaraan/:id', getKendaraanById);
router.post('/kendaraan', createKendaraan);
router.post('/kendaraan/:id', editKendaraan);
router.delete('/kendaraan/:id', deleteKendaraan);