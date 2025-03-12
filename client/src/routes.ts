// Define the literal path types for type safety
type RoutePath =
  | "/"
  | "/login"
  | "/register"
  | "/dashboard"
  | "/profile"
  | "/settings"
  | "/logout"
  | "/404"
  | "/about"
  | "/demo"
  | "/landing"
  | "/posts"
  | "/inbox";

// Define the route keys
type RouteKey =
  | "home"
  | "login"
  | "register"
  | "dashboard"
  | "profile"
  | "settings"
  | "logout"
  | "notFound"
  | "about"
  | "demo"
  | "landing"
  | "posts"
  | "inbox";

// Type to ensure all routes are included
type Routes = Record<RouteKey, RoutePath>;

// Const assertion ensures the routes object is readonly and has literal types
export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  profile: "/profile",
  settings: "/settings",
  logout: "/logout",
  notFound: "/404",
  about: "/about",
  demo: "/demo",
  landing: "/landing",
  posts: "/posts",
  inbox: "/inbox",
} as const satisfies Routes;
