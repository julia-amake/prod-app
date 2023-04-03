import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('shared/addQueryParams.test', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
        });
        expect(params).toBe('?test=value&test2=value2');
    });

    test('test with multiple params with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            test2: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
