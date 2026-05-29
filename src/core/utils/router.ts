export const ROUTES = [
    {
        path: "/auth/login",
        name: "Iniciar Sesion",
        public: true,
    },
    {
        path: "/",
        name: "Panel",
        public: false,
    },
    {
        path: "/users",
        name: "Usuarios",
        public: false
    },
    {
        path: "/categories",
        name: "Categorias",
        public: false
    },
    {
        path: "/products",
        name: "Productos",
        public: false
    },
]