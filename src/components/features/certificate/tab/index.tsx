import { useState } from "react";
import { cn } from "@/libs/utils";
import { CertificateGallery } from "../gallery";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
};

type CertificateTabsProps = {
  groups: {
    label: string;
    certificates: Certificate[];
  }[];
};

export default function CertificateTabs({ groups }: CertificateTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [loadedTabs, setLoadedTabs] = useState<number[]>([0]); // cache visited

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    if (!loadedTabs.includes(idx)) {
      setLoadedTabs((prev) => [...prev, idx]); // mark as visited
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
        {groups.map((group, idx) => (
          <button
            key={group.label}
            onClick={() => handleTabChange(idx)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-t-lg transition-colors",
              idx === activeTab
                ? "bg-gray-100 dark:bg-gray-800 text-blue-600"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-500"
            )}
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {groups.map((group, idx) => (
          <div
            key={group.label}
            className={cn(
              idx === activeTab ? "block" : "hidden"
            )}
          >
            {loadedTabs.includes(idx) && (
              <CertificateGallery certificates={group.certificates} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
