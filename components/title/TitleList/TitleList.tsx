import Alert from '@ui/Alert';
import Loader from '@ui/Loader';

import useTitleData from '@hooks/useTitleData';

import { Severity } from '@enums/alert.enum';

import TitleCard from '../TitleCard';

const TitleList = () => {
  const { titles, isLoading, isError, search } = useTitleData();

  return (
    <>
      {isError ? (
        <Alert data-testid="search-error" type={Severity.ERROR}>
          Something went wrong, please try again
        </Alert>
      ) : isLoading ? (
        <Loader color="red" />
      ) : titles.length === 0 ? (
        <div data-testid="search-not-found" className="flex justify-center">
          <div className="text-left text-sm">
            <p>Your search for {`"${search}"`} did not have any matches.</p>

            <p className="my-2">Suggestions:</p>

            <ul className="list-disc pl-10">
              <li>Try differents keywords</li>
              <li>Looking for a movie or TV show?</li>
              <li>Try using a movie, TV show title, an actor or director</li>
              <li>Try a genre, like comedy, romance, sport, or drama</li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          data-testid="search-results"
          className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-1 gap-y-5 lg:gap-x-2 md:gap-y-14 lg:gap-y-16"
        >
          {titles.map((title, index) => (
            <TitleCard key={title.title + index} title={title} />
          ))}
        </div>
      )}
    </>
  );
};

export default TitleList;
