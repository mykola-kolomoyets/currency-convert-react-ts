/**
 * MODULES
 */
import { useQuery } from 'react-query';

/**
 * API
 */
import { CurrencyService } from '@api/services';


export const useAllRates = () => {
  const { isLoading, data: response, error, isFetched } = useQuery(
    'all rates', 
    () => CurrencyService.getAllRates('USD'),
    {
      onError: (error) => console.log(error),
      select: ({data}) => data 
    }
  );

  return {
    isLoading,
    response,
    error,
    isFetched
  };
}