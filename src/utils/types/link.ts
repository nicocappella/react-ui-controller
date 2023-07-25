import { RemoveFields } from './generic';

interface ParsedUrlQueryInput
    extends NodeJS.Dict<string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null> {}

interface UrlObject {
    auth?: string | null | undefined;
    hash?: string | null | undefined;
    host?: string | null | undefined;
    hostname?: string | null | undefined;
    href?: string | null | undefined;
    pathname?: string | null | undefined;
    protocol?: string | null | undefined;
    search?: string | null | undefined;
    slashes?: boolean | null | undefined;
    port?: string | number | null | undefined;
    query?: string | null | ParsedUrlQueryInput | undefined;
}

type Url = string | UrlObject;

type InternalLinkProps = {
    href?: Url;
    as?: Url;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type TargetedLinkProps = RemoveFields<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'onMouseEnter' | 'onTouchStart'> &
    InternalLinkProps & {
        children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>;
