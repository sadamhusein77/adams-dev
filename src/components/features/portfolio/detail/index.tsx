import ResponsiveDialog from '@/components/ui/dialog';
import SmartImage from '@/components/ui/smart-image';
import Button from '@/components/ui/button';
import useClipboard from '@/hooks/use-clipboard';
import { useT } from '@/hooks/use-t';
import { useToastStore } from '@/stores/useToastStore';
import type { IProject } from '@/pages/project';

interface IDetailProps {
  selected: IProject | null;
  handleClose: () => void;
  showDialog: boolean;
}

export default function PortfolioDetail({
  selected,
  handleClose,
  showDialog = false,
}: IDetailProps) {
  const { copyToClipboard } = useClipboard();
  const { showToast } = useToastStore();
  const { t } = useT('commons');

  if (!selected) return null;

  const handleRedirect = (url: string) => {
    if (!url) console.error('Url not valid');
    window.location.href = url;
  };

  const handleCopy = (val: string) => {
    copyToClipboard(val ?? '')
      .then(() => {
        showToast({ message: t('copied'), type: 'info' });
      })
      .catch(() => {
        console.error('Failed to copy');
      });
  };

  return (
    <ResponsiveDialog
      open={showDialog}
      onClose={handleClose}
      title={selected.title || ''}
    >
      <div className="p-4 md:p-6 max-h-[80dvh] lg:min-w-[750px] max-w-[750px] overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500 mt-1">
              {selected.year} • {selected.tags.join(' • ')}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <SmartImage
            key={selected.title}
            src={selected.image}
            alt={`Photo ${selected.title}`}
            wrapperClassName="w-full h-full rounded-lg"
            imgClassName={'object-contained object-center h-60'}
          />
        </div>

        <div className="mt-4 prose max-w-none text-gray-700 p-1">
          <p>{selected.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {selected.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 bg-gray-100 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <Button
              label="Visit Project"
              variant="filled"
              onClick={() => handleRedirect(selected.url)}
              className='!text-sm !rounded-xl'
            />
            <Button
              label="Copy Link"
              variant="text"
              onClick={() => handleCopy(selected.url)}
              className='!text-sm'
            />
          </div>
        </div>
      </div>
    </ResponsiveDialog>
  );
}
