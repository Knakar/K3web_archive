import { FC, MouseEventHandler } from 'react';
import { Button } from 'components/atoms/Button';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CreateContestButton: FC<Props> = ({ onClick }) => (
  <Button
    className="w-44 h-12 text-xl text-center bg-blue-500 text-white rounded"
    onClick={onClick}
  >
    コンテストを作成
  </Button>
);
