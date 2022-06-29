import { useTranslation } from 'react-i18next';
import { Card } from './Card';
import { Divider } from './Divider';
import { Title } from './Text';

interface Props {
  open: boolean;
  onClose: () => any;
}

export const HelpModal = ({ open, onClose }: Props) => {
  const { t } = useTranslation('global', { keyPrefix: 'help' });

  if (!open) return <></>;

  return (
    <div onClick={onClose} className="absolute bg-black bg-opacity-50 inset-0 cursor-pointer">
      <div className="max-w-2xl h-screen m-auto flex justify-center px-4">
        <Card className="m-auto flex flex-col gap-4">
          <Title>{t('when.title')}</Title>
          <p>{t('when.p1')}</p>
          <p>
            {t('when.p2')} <span className="font-semibold">splitnow.app</span>
          </p>
          <Divider />
          <Title>{t('how.title')}</Title>
          <ol className="list-decimal list-inside">
            <li>{t('how.list.0')}</li>
            <li>{t('how.list.1')}</li>
            <li>{t('how.list.2')}</li>
          </ol>
        </Card>
      </div>
    </div>
  );
};
