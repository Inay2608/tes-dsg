-- CreateTable
CREATE TABLE "m_kendaraan" (
    "id" SERIAL NOT NULL,
    "jenis" TEXT NOT NULL,
    "merek" TEXT NOT NULL,
    "stok" INTEGER NOT NULL,

    CONSTRAINT "m_kendaraan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_jenis" (
    "id" SERIAL NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "m_jenis_pkey" PRIMARY KEY ("id")
);
