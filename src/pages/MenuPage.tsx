import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Feedback } from "../components/Feedback";
import { usePageTitle } from "../hooks/usePageTitle";

const menuImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=88";
const recipesUrl = "https://dummyjson.com/recipes";
const pageSize = 6;

type Recipe = {
  id: number;
  name: string;
  cuisine: string;
  mealType: string[];
  ingredients: string[];
  image: string;
  rating: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
};

type MenuState =
  | { status: "loading" }
  | { status: "success"; recipes: Recipe[]; total: number }
  | { status: "error"; message: string };

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isRecipe(value: unknown): value is Recipe {
  if (!isObject(value)) return false;
  return (
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.cuisine === "string" &&
    Array.isArray(value.mealType) &&
    value.mealType.every((item) => typeof item === "string") &&
    Array.isArray(value.ingredients) &&
    value.ingredients.every((item) => typeof item === "string") &&
    typeof value.image === "string" &&
    typeof value.rating === "number" &&
    typeof value.prepTimeMinutes === "number" &&
    typeof value.cookTimeMinutes === "number"
  );
}

function parseRecipes(payload: unknown): { recipes: Recipe[]; total: number } {
  if (
    !isObject(payload) ||
    !Array.isArray(payload.recipes) ||
    typeof payload.total !== "number" ||
    !Number.isInteger(payload.total) ||
    payload.total < 0
  ) {
    throw new Error("The menu service returned an unexpected response.");
  }

  if (!payload.recipes.every(isRecipe)) {
    throw new Error("Some menu items could not be read. Please try again.");
  }

  return { recipes: payload.recipes, total: payload.total };
}

function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error) && !error.response) {
    return "We could not reach the menu service. Check your connection and try again.";
  }
  return error instanceof Error
    ? error.message
    : "The menu could not be loaded. Please try again.";
}

export function MenuPage() {
  const [menuState, setMenuState] = useState<MenuState>({ status: "loading" });
  const [retryCount, setRetryCount] = useState(0);
  const [page, setPage] = useState(1);
  usePageTitle("The menu");

  useEffect(() => {
    const controller = new AbortController();

    async function loadMenu() {
      setMenuState({ status: "loading" });
      try {
        const response = await axios.get<unknown>(recipesUrl, {
          params: { limit: pageSize, skip: (page - 1) * pageSize },
          signal: controller.signal,
        });
        const { recipes, total } = parseRecipes(response.data);
        setMenuState({ status: "success", recipes, total });
      } catch (error) {
        if (controller.signal.aborted) return;
        setMenuState({ status: "error", message: getErrorMessage(error) });
      }
    }

    void loadMenu();
    return () => controller.abort();
  }, [page, retryCount]);

  const totalPages =
    menuState.status === "success"
      ? Math.ceil(menuState.total / pageSize)
      : 0;

  return (
    <>
      <section
        className="relative flex min-h-[350px] flex-col justify-center bg-cover bg-[position:center_54%] px-page py-[50px] text-white max-[760px]:min-h-[300px] max-[760px]:px-page-mobile max-[760px]:py-10"
        style={{ backgroundImage: `url(${menuImage})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#181a13b8_0%,#181a136e_46%,#181a130f_100%)]" />
        <span className="relative z-10 text-[10px] font-semibold tracking-[1.1px] text-[#eee8d8] uppercase">
          Made for passing around
        </span>
        <h1 className="relative z-10 mt-[17px] mb-0 font-serif text-[56px] leading-[1.02] font-medium max-[760px]:text-[45px]">
          Eat what
          <br />
          <em>makes you happy.</em>
        </h1>
      </section>
      <section className="grid grid-cols-[.8fr_1.2fr] gap-[12%] px-page pt-[76px] pb-[105px] max-[760px]:grid-cols-1 max-[760px]:gap-10 max-[760px]:px-page-mobile max-[760px]:pt-[51px] max-[760px]:pb-[70px]">
        <aside className="sticky top-8 self-start max-[760px]:static">
          <span className="flex items-center gap-3 text-[10px] font-semibold tracking-[1.1px] text-olive uppercase">
            <span className="text-[9px] text-clay">02</span> The menu
          </span>
          <p className="my-[27px] max-w-[250px] text-[13px] leading-[1.9] text-muted max-[760px]:mt-[18px] max-[760px]:mb-[10px] max-[760px]:max-w-[390px]">
            Browse fresh dishes from our connected recipe service. Ingredients
            and timings are provided for each dish.
          </p>
          <span className="text-[10px] leading-[1.7] text-muted">
            Please tell us about allergies. We are happy to help.
          </span>
        </aside>
        <div aria-busy={menuState.status === "loading"}>
          {menuState.status === "loading" && (
            <Feedback state="loading">Loading the menu…</Feedback>
          )}
          {menuState.status === "error" && (
            <div>
              <Feedback state="error">{menuState.message}</Feedback>
              <Button
                className="mt-4"
                onClick={() => setRetryCount((count) => count + 1)}
              >
                Retry
              </Button>
            </div>
          )}
          {menuState.status === "success" && menuState.recipes.length === 0 && (
            <Feedback state="empty">No dishes are available right now.</Feedback>
          )}
          {menuState.status === "success" && menuState.recipes.length > 0 && (
            <>
              <Feedback state="success" className="mb-5">
                Showing {(page - 1) * pageSize + 1}–
                {Math.min(page * pageSize, menuState.total)} of {menuState.total} dishes
              </Feedback>
              <div className="grid grid-cols-2 gap-5 max-[620px]:grid-cols-1">
                {menuState.recipes.map((recipe) => (
                  <article
                    className="overflow-hidden border border-line bg-white"
                    key={recipe.id}
                  >
                    <img
                      className="h-44 w-full object-cover"
                      src={recipe.image}
                      alt={recipe.name}
                      loading="lazy"
                    />
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-serif text-xl leading-tight font-medium">
                          {recipe.name}
                        </h2>
                        <span className="shrink-0 text-[10px] text-muted">
                          ★ {recipe.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="mt-2 text-[10px] tracking-wide text-olive uppercase">
                        {recipe.cuisine}
                        {recipe.mealType.length > 0 && ` · ${recipe.mealType.join(", ")}`}
                      </p>
                      <p className="mt-3 text-[11px] leading-relaxed text-muted">
                        {recipe.ingredients.join(" · ")}
                      </p>
                      <p className="mt-3 text-[10px] text-muted">
                        Prep {recipe.prepTimeMinutes} min · Cook {recipe.cookTimeMinutes} min
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              {totalPages > 1 && (
                <nav
                  className="mt-8 flex items-center justify-between gap-4"
                  aria-label="Menu pagination"
                >
                  <Button
                    variant="outline"
                    disabled={page === 1}
                    onClick={() => setPage((currentPage) => currentPage - 1)}
                  >
                    Previous
                  </Button>
                  <span className="text-[11px] text-muted" aria-current="page">
                    Page {page} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    disabled={page >= totalPages}
                    onClick={() => setPage((currentPage) => currentPage + 1)}
                  >
                    Next
                  </Button>
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
