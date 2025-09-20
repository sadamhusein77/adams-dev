import React from "react";
import { Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Website Name */}
        <div className="text-lg font-semibold tracking-wide hover:text-white transition-colors">
          Adams Dev
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-gray-400" />
          <a
            href="mailto:sadamhusein77.sh@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            sadamhusein77.sh@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Adams Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
