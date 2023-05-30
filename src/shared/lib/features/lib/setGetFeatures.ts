import { FeatureFlags } from '@/shared/types/featureFlags';

// Фичи не реактивные, не меняются в течение всей сессии!!!
// Пользователь залогинился - фичи изменились, все остальное время они не изменяются
// Можно сделать реактивными: добавить в стейт, создать хук и тд и тп, но это не обязательно

// eslint-disable-next-line
export let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags?.[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
