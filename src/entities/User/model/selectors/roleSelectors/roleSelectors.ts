import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../../consts/consts';

export const getUserRoles = (state: StateSchema) =>
    state.user.authData?.roles || [UserRole.USER];
export const getIsAdmin = createSelector(getUserRoles, (roles) =>
    roles.includes(UserRole.ADMIN),
);
export const getIsManager = createSelector(getUserRoles, (roles) =>
    roles.includes(UserRole.MANAGER),
);
