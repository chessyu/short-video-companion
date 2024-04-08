//  nav 宽度 
export const SIDE_NAV_WIDTH = process.env.NEXT_PUBLIC_SIDE_NAV_WIDTH ?? 280;

// header 高度
export const TOP_NAV_HEIGHT = process.env.NEXT_PUBLIC_TOP_NAV_HEIGHT ?? 80;

// 网站名称·
export const WEBSITE_NAME = process.env.NEXT_PUBLIC_WEBSITE_NAME ?? "配音坊"

// 是否是客户端
export const IS_WINDOW = typeof window === 'undefined';

export const LOCAL_HOST = 'http://localhost:5200';

export const NEXT_PUBLIC_PATH_ORIGIN =
    process.env.NEXT_PUBLIC_PATH_ORIGIN ?? (!IS_WINDOW ? location.origin : LOCAL_HOST);


