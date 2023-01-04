import { useState } from 'react';

export default function useFetching() {
    /** Состояния запроса, обёртка обработки ошибок */
    const [isFetchLoading, setFetchLoading] = useState(false);
    const [errorContent, setErrorContent] = useState('');

    const fetching = (query: () => void) => {
        try {
            setFetchLoading(true);
            query();
        } catch (error) {
            setErrorContent(JSON.stringify(error));
            console.log(JSON.stringify(error));
        } finally {
            setFetchLoading(false);
        }
    };

    return { fetching, isFetchLoading, errorContent };
}
