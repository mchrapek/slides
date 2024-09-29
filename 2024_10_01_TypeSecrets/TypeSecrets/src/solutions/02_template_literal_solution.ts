// STEP 1
type RouteParams = "user" | "admin" | "settings";

type RoutePath = `/dashboard/${RouteParams}`;

const userRoute: RoutePath = "/dashboard/user";
const adminRoute: RoutePath = "/dashboard/admin";
const settingsRoute: RoutePath = "/dashboard/settings";


// STEP 2

type Routes = '/dashboard/user' | '/dashboard/admin';

type ExtractRouteParam<T> = T extends `/dashboard/${infer R}` ? R : never;

type TestRoutes = ExtractRouteParam<Routes>;


// STEP 3
type PropertyType = 'margin' | 'padding';
type Position = 'left' | 'right' | 'top' | 'bottom';
type PropertyCss = `${PropertyType}-${Position}`

type UnitCss = 'px' | 'em';
type SizeCss = `${number}${UnitCss}`

type ValueCss = {
  [Key in PropertyCss]?: SizeCss;
}

const margin: ValueCss = {
  'margin-left': '1px'
}
