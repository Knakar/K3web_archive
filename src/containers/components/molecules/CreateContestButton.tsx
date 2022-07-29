import { FC, useCallback } from 'react';
import { CreateContestButton as OriginalButton } from 'components/molecules/CreateContestButton';

export const CreateContestButton: FC = () => {
  const handleClick = useCallback(() => {
    // TODO: コンテスト作成ボタンクリック時の処理をここに書く
  }, []);

  return <OriginalButton onClick={handleClick} />;
};
