import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export function useSupabaseQuery<T>(
  key: string[],
  query: () => Promise<{ data: T | null; error: Error | null }>,
  options?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T, Error>({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await query();
      if (error) throw error;
      if (!data) throw new Error('No data found');
      return data;
    },
    ...options,
  });
}
