import { User } from "./user";
type PermissionName = (
    'PermissionApproveRejectCampaign' | 'PermissionCreateCampaign' | 'PermissionCreateUser' | 'PermissionDeleteCampaign' | 'PermissionDeleteUser' | 'PermissionEditCampaign' | 'PermissionEditUser' | 'PermissionViewCampaign' | 'PermissionViewUser'
)
type PermissionNumericValue = number
export type PermissionMap = {
    [key in PermissionName]: PermissionNumericValue;
};
export interface Session extends User {
    permissions: PermissionName[];
    permissionMap: PermissionMap;
}