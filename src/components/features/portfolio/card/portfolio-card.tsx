import BaseCard from '@/components/ui/card';
import Chip from '@/components/ui/chip';
import SmartImage from '@/components/ui/smart-image';
import { cn } from '@/libs/utils';
import type { IProject } from '@/pages/project';

interface IPortfolioCard {
    handleSelected: (val: number) => void;
}

export default function PortfolioCard({image = '', description = '', tags = [], title = '', year = 2025, id, handleSelected}: IPortfolioCard & IProject) {
  return (
    <BaseCard 
        className='bg-white rounded-2xl shadow-sm overflow-hidden border cursor-pointer hover:shadow-md transition-shadow !p-0'
        onClick={() => handleSelected(id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSelected(id);
        }}
        aria-label={`Open project ${title}`}
                >
        <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <SmartImage
            key={title}
            src={image}
            alt={`Photo ${title}`}
            wrapperClassName="w-full h-full rounded-lg"
            imgClassName={cn(!image ? 'object-contained' : 'object-cover', 'object-center')}
            />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 line-clamp-3">{description}</p>

            <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-2 items-center flex-wrap">
                {tags.slice(0, 3).map((t) => (
                    <Chip key={t} label={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full !font-normal"  />
                ))}
            </div>
            <div className="text-xs text-gray-500">{year}</div>
            </div>
        </div>
    </BaseCard>
  )
}
