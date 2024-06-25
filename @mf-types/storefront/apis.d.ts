
    export type RemoteKeys = 'storefront/storenav' | 'storefront/store';
    type PackageType<T> = T extends 'storefront/store' ? typeof import('storefront/store') :T extends 'storefront/storenav' ? typeof import('storefront/storenav') :any;