import {
  imgCert1, imgCert2, imgCert3, imgCert4, imgCert5,
  imgCert6, imgCert7, imgCert8, imgCert9, imgCert10,
  imgCert11, imgCert12, imgCert13, imgCert14, imgCert15,
} from '@/assets';
import CertificateTabs from '@/components/features/certificate/tab';

export default function Certificate() {
  const allCertificates = [
    { id: "1", title: "Full Stack Golang Vue Nuxt", issuer: "BuildWithAngga", date: "28 June 2025", imageUrl: imgCert1 },
    { id: "3", title: "Full Stack Javascript Website Top Up Voucher Game", issuer: "BuildWithAngga", date: "14 April 2025", imageUrl: imgCert3 },
    { id: "2", title: "Full Stack Javascript Website Travel", issuer: "BuildWithAngga", date: "14 March 2025", imageUrl: imgCert2 },
    { id: "4", title: "Mastering Web Development With React & Tailwindcss", issuer: "BuildWithAngga", date: "20 September 2021", imageUrl: imgCert4 },

    { id: "13", title: "AI Practice", issuer: "DICODING", date: "28 Juni 2025", imageUrl: imgCert13 },
    { id: "14", title: "Generative AI", issuer: "DICODING", date: "28 Juni 2025", imageUrl: imgCert14 },
    { id: "12", title: "Web React", issuer: "DICODING", date: "08 Juni 2022", imageUrl: imgCert12 },
    { id: "11", title: "Dasar Git", issuer: "DICODING", date: "15 September 2021", imageUrl: imgCert11 },
    { id: "9", title: "Architecting on AWS", issuer: "DICODING", date: "16 Juni 2021", imageUrl: imgCert9 },
    { id: "10", title: "Front-End Web Pemula", issuer: "DICODING", date: "07 Juni 2021", imageUrl: imgCert10 },
    { id: "6", title: "Cloud Practitioner Essentials", issuer: "DICODING", date: "24 Mei 2021", imageUrl: imgCert6 },
    { id: "5", title: "Dasar Pemerograman Web", issuer: "DICODING", date: "17 Mei 2021", imageUrl: imgCert5 },
    { id: "8", title: "Back-End Pemula", issuer: "DICODING", date: "28 April 2021", imageUrl: imgCert8 },
    { id: "7", title: "Dasar Pemerograman Javascript", issuer: "DICODING", date: "16 April 2021", imageUrl: imgCert7 },

    { id: "15", title: "Go-Lang Pemula - Mahir", issuer: "Udemy - Programmer Zaman Now", date: "28 Juni 2025", imageUrl: imgCert15 },
  ];

  // Group by issuer
  const groups = [
    {
      label: "BuildWithAngga",
      certificates: allCertificates.filter(c => c.issuer.includes("BuildWithAngga")),
    },
    {
      label: "Dicoding",
      certificates: allCertificates.filter(c => c.issuer.includes("DICODING")),
    },
    {
      label: "Udemy",
      certificates: allCertificates.filter(c => c.issuer.includes("Udemy")),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Certificates</h1>
      <CertificateTabs groups={groups} />
    </div>
  );
}
