import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for API calls with loading and error states
 * Makes it easy to handle async API calls in components
 */

export interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
  autoFetch?: boolean;
}

export interface UseApiReturn<T, P extends any[]> {
  data: T | null;
  loading: boolean;
  error: any | null;
  execute: (...args: P) => Promise<T | null>;
  reset: () => void;
}

export function useApi<T, P extends any[] = []>(
  apiFunction: (...args: P) => Promise<T>,
  options: UseApiOptions<T> = {}
): UseApiReturn<T, P> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const { onSuccess, onError, autoFetch = false } = options;

  const execute = useCallback(
    async (...args: P): Promise<T | null> => {
      try {
        setLoading(true);
        setError(null);

        const result = await apiFunction(...args);
        setData(result);

        if (onSuccess) {
          onSuccess(result);
        }

        return result;
      } catch (err) {
        setError(err);

        if (onError) {
          onError(err);
        }

        return null;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction, onSuccess, onError]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (autoFetch) {
      execute();
    }
  }, [autoFetch, execute]);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
}

/**
 * Hook for pagination with API calls
 */
export interface UsePaginatedApiOptions<T> extends UseApiOptions<T> {
  initialPage?: number;
  initialLimit?: number;
}

export interface UsePaginatedApiReturn<T, P extends any[]> extends UseApiReturn<T, P> {
  page: number;
  limit: number;
  totalPages: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export function usePaginatedApi<T, P extends any[] = []>(
  apiFunction: (...args: P) => Promise<any>,
  options: UsePaginatedApiOptions<T> = {}
): UsePaginatedApiReturn<T, P> {
  const { initialPage = 1, initialLimit = 10 } = options;
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [totalPages, setTotalPages] = useState(0);

  const api = useApi(apiFunction, {
    ...options,
    onSuccess: (data: any) => {
      if (data?.meta?.total_pages) {
        setTotalPages(data.meta.total_pages);
      }
      if (options.onSuccess) {
        options.onSuccess(data);
      }
    },
  });

  const nextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }, [page, totalPages]);

  const prevPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  return {
    ...api,
    page,
    limit,
    totalPages,
    setPage,
    setLimit,
    nextPage,
    prevPage,
  };
}
