import express from "express";
import cors from "cors";
import session from "express-session";
import { getEnv } from "./utils/getEnv";

import authRoutes from "./resources/auth/auth.routes";
import userRoutes from "./resources/user/user.routes";
import productRoutes from "./resources/product/product.routes";
import purchaseRoutes from "./resources/purchase/purchase.routes";

import cookieParser from "cookie-parser";
import { setLangCookie } from "./resources/language/language.middleware";
import languageRoutes from "./resources/language/language.routes";

import { errorMiddleware } from "./middlewares/errorMiddleware";

const env = getEnv();

const app = express();

app.use(cors());
app.use(express.json());

// cookies antes de tudo
app.use(cookieParser());
app.use(setLangCookie);
app.use(languageRoutes);

// sessões
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  }),
);

// ROTAS
app.use(authRoutes);
app.use(userRoutes);
app.use(productRoutes);
app.use(purchaseRoutes);
app.use(languageRoutes);

// ERROS
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(`Servidor rodando na porta: ${env.PORT}`);
});
