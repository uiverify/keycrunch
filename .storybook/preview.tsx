import type { Preview } from "@storybook/react-vite";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "../src/cart/CartContext";
import type { CartItem } from "../src/lib/cart";
import "../src/index.css";

/** Every story gets the cart context and a router. A page story that needs a URL declares it as
 *  `parameters.route = { path, pattern }` and a filled cart as `parameters.cart`. */
const preview: Preview = {
  parameters: { layout: "centered" },
  decorators: [
    (Story, context) => {
      const route = context.parameters.route as { path: string; pattern: string } | undefined;
      const cart = context.parameters.cart as CartItem[] | undefined;
      const fullscreen = context.parameters.layout === "fullscreen";
      return (
        <div style={fullscreen ? undefined : { background: "var(--bg)", padding: 32 }}>
          <CartProvider initialItems={cart}>
            <MemoryRouter initialEntries={[route?.path ?? "/"]}>
              <Routes>
                <Route path={route?.pattern ?? "*"} element={<Story />} />
              </Routes>
            </MemoryRouter>
          </CartProvider>
        </div>
      );
    },
  ],
};

export default preview;
