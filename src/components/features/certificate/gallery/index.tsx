import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import ResponsiveDialog from "@/components/ui/dialog";
import InViewWrapper from "@/components/ui/in-view-wrapper";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
};

type CertificateGalleryProps = {
  certificates: Certificate[];
};

export const CertificateGallery: React.FC<CertificateGalleryProps> = ({
  certificates,
}) => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  function handleClose() {
    setShowDialog(false);
    setTimeout(() => {
      setActiveCert(null)
    }, 250);
  }

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <InViewWrapper key={cert.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700"
              onClick={() => {setActiveCert(cert); setShowDialog(true)}}
            >
              <div className="relative w-full h-48">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  loading="lazy" // ✅ extra performance boost
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <Award size={16} /> {cert.issuer}
                </p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>
            </motion.div>
          </InViewWrapper>
        ))}
      </div>

      {/* Use ResponsiveDialog for Preview */}
      <ResponsiveDialog
        open={showDialog}
        onClose={handleClose}
        title={activeCert?.title}
      >
        {activeCert && (
          <div className="space-y-4 p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Issued by{" "}
              <span className="font-medium">{activeCert.issuer}</span> on{" "}
              {activeCert.date}
            </p>
            <img
              src={activeCert.imageUrl}
              alt={activeCert.title}
              className="rounded-lg w-full max-h-[70vh] object-contain border border-gray-200 dark:border-gray-700"
            />
          </div>
        )}
      </ResponsiveDialog>
    </>
  );
};
