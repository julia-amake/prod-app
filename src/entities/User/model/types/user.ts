import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/consts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

// state:
export interface UserSchema {
    authData?: User | null;

    // for auth data initialize check
    _isInitialized: boolean;
}
