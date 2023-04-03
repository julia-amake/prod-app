export const getQueryParams = (params: OptionalRecord<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (!value) {
            searchParams.delete(name);
            return;
        }
        searchParams.set(name, value);
    });

    return `?${searchParams.toString()}`;
};

/**
 * Function of adding query string parameters to URL
 * @param params
 */

export const addQueryParams = (params: OptionalRecord<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
