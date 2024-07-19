import axios from 'axios';
import { useState } from 'react';

interface useFetchProps{
  path :string,
  input:any,
}

interface UseFetchResult{
  data:any
  error?:any
  loading:boolean
  fetchData: () => Promise<void>
}
export const useFetchPost = ({ path, input }: useFetchProps): UseFetchResult => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        path,
        input,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setData(response.data);
    } catch (error: any) {
      setError(error.response?.data?.error || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};

