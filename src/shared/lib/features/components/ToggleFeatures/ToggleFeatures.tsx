import { ReactElement } from 'react';
import { FeatureFlags } from '../../../../types/featureFlags';
import { getFeatureFlag } from '../../lib/setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { feature, on, off } = props;

    return getFeatureFlag(feature) ? on : off;
};
