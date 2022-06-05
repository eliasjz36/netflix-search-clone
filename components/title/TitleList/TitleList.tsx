import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Alert from '@ui/Alert';
import Loader from '@ui/Loader';

import requests from '@services/titles';

import { Title } from '@interfaces/title.interface';

import { Severity } from '@enums/alert.enum';

import TitleCard from '../TitleCard';

const TitleList = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const search = router.query.q;

  useEffect(() => {
    const fetchTitles = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const titles = await requests.getTitles((search as string) || 'a');

        setTitles(titles);
      } catch (error) {
        setIsError(true);

        console.error((error as Error).message);
      }

      setIsLoading(false);
    };

    fetchTitles();
  }, [search]);

  if (isError) {
    return (
      <Alert data-testid="search-error" type={Severity.ERROR}>
        Something went wrong, please try again
      </Alert>
    );
  }
  console.log(titles);

  return (
    <div>
      {isLoading ? (
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
    </div>
  );
};

export default TitleList;
