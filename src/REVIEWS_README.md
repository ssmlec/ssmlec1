# Adding the Reviews section to Home.tsx

## 1. Add the file
Copy `ReviewsSection.tsx` into `src/components/`.

It's self-contained — the 9 reviews are real quotes from your Google Business
listing (AVEVA, .NET, MERN, PLC & SCADA, Data Science, Laravel, and general
training feedback), so there's nothing to fill in unless you want to swap
which reviews are featured.

## 2. Import it in Home.tsx
Add this import near your other component imports:

```tsx
import ReviewsSection from "@/components/ReviewsSection";
```

## 3. Render it
Your `Home()` function currently has the old `<Testimonials />` commented out:

```tsx
{/* <Testimonials /> */}
```

Replace that line with:

```tsx
<ReviewsSection />
```

That's it — no changes needed to `site-data.ts` or the existing `testimonials`
array, since this component carries its own data.

## Note on star ratings
The scraped review text didn't include each review's actual star count, so
every card shows 5 stars as a placeholder. If you'd rather pull live,
accurate ratings (and keep them updating automatically), the proper way is
the Google Places API / Google Business Profile widget — happy to wire that
up instead if you'd prefer real-time reviews over a static list.
