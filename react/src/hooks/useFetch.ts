import { useState, useEffect } from 'react';
    
interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
 
const useFetch = <T>(url: string): FetchState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const json: T = await res.json();
        if (!cancelled) setData(json);
        } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : '알 수 없는 오류');
        } finally {
        if (!cancelled) setLoading(false);
        }
    };

    fetchData();
    return () => { cancelled = true; };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;