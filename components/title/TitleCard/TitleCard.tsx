import Image from 'next/image';

import { Title } from '@interfaces/title.interface';

interface TitleCardProps {
  title: Title;
}

const TitleCard = ({ title }: TitleCardProps) => {
  return (
    <div data-testid="search-result" className="titleCard relative max-w-xs">
      <div className="face1 z-20 transition-all duration-300 relative">
        <Image
          src={title.image}
          unoptimized={true}
          width={580}
          height={800}
          objectFit="cover"
          className="rounded"
          alt={`image of the title ${title.title}`}
        />
      </div>
      <div className="face2 absolute w-full h-fit p-5 -translate-y-44 bg-dark-gray z-10 transition-all duration-300 text-center shadow-lg rounded-b">
        <h3 className="font-bold text-sm text-white">{title.title}</h3>
        <p className="text-xs text-white">{title.description}</p>
      </div>
    </div>
  );
};

export default TitleCard;
