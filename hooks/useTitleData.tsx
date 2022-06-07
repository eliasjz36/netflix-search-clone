import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import requests from '@services/titles';

import { Title } from '@interfaces/title.interface';

const useTitleData = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const search = router.query.q;

  useEffect(() => {
    const fetchTitles = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        // get titles from api based on search query if it exists or get titles with the expression 'b'
        const titles = await requests.getTitles((search as string) || 'b');

        setTitles(titles);
      } catch (error) {
        setIsError(true);

        console.error((error as Error).message);
      }

      setIsLoading(false);
    };

    fetchTitles();
  }, [search]);

  return { titles, isLoading, isError, search };
};

export default useTitleData;
