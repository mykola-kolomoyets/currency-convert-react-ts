/**
 * MODULES
 */
 import { useQuery } from 'react-query';

 /**
  * API
  */
 import { CurrencyService } from '@api/services';
 
 
 export const useExchangeRate = (from: string, to: string) => {
   const { isLoading, data: response, error, isFetched } = useQuery(
     ['exchange rate', from, to], 
     () => CurrencyService.getExchangeRate(from, to),
     {
       onError: (error) => console.log(error),
       select: ({data}) => data.conversion_rate
     }
   );
 
   return {
     isLoading,
     response,
     error,
     isFetched
   };
 }