# SEO Audit & Optimization Roadmap: Ali Fakhreddine Portfolio

### Context
- **Target URL**: [Current Local/Vercel Deployment]
- **Market/Geography**: Global / Lebanon (Tech Sector)
- **Core Goals**: Personal Branding, Lead Generation (Job Opportunities)

---

### 1. Audit Findings (Checklist)

- [x] **SEO-FIND-1.2 [Incorrect Heading Hierarchy]**:
  - **Location**: Home Page (`Index.tsx`)
  - **Description**: All major sections (About, Projects, etc.) use a `div` for their titles instead of `h2`. This breaks the semantic structure of the document.
  - **Impact**: High
  - **Recommendation**: Change the `div` in `Section.tsx` (line 39) to an `h2` and allow overriding it for pages where it should be an `h1`.

- [x] **SEO-FIND-2.1 [Missing XML Sitemap]**:
  - **Location**: `public/sitemap.xml`
  - **Description**: No sitemap was found in the public directory. Sitemaps help search engines discover all pages.
  - **Impact**: Medium
  - **Recommendation**: Create a static `sitemap.xml` in the `public` folder.

- [x] **SEO-FIND-2.2 [Basic robots.txt]**:
  - **Location**: `public/robots.txt`
  - **Description**: The current `robots.txt` is missing a reference to the sitemap.
  - **Impact**: Low
  - **Recommendation**: Add `Sitemap: https://[your-domain]/sitemap.xml` to the end of the file.

- [x] **SEO-FIND-3.1 [Missing Structured Data (JSON-LD)]**:
  - **Location**: `index.html`
  - **Description**: No Schema.org markup found. Structured data helps search engines understand the content (Person, Portfolio, Work).
  - **Impact**: High
  - **Recommendation**: Add `Person` and `ProfessionalService` JSON-LD to the `<head>` of `index.html`.

- [ ] **SEO-FIND-1.1 [Missing H1 Tags on Subpages]**:
  - **Location**: `/privacy`, `/terms`, `/404`
  - **Description**: The `Section` component uses a `div` for the title. While the Home page has an `H1` in the `Hero` component, other pages that reuse `Section` for their main heading have no `H1` at all.
  - **Impact**: Critical
  - **Recommendation**: Update `Section.tsx` to allow passing a heading level or default the main section title to `h1` if it's the primary heading of the page.

- [ ] **SEO-FIND-4.1 [Static Meta Tags for SPA]**:
  - **Location**: `src/App.tsx` / `index.html`
  - **Description**: Metadata is only defined in `index.html`. Subpages like Privacy or Terms don't have unique titles or descriptions in the browser tab or search results.
  - **Impact**: Medium
  - **Recommendation**: Install and implement `react-helmet-async` to manage head tags per route.

---

### 2. Remediation Roadmap (Checklist)

- [x] **SEO-REC-1.1 [Fix Heading Hierarchy]**:
  - **Priority**: Critical
  - **Effort**: Low (5 mins)
  - **Outcome**: Improved semantic structure and crawlability.
  - **Validation**: Inspect element on Home and Privacy pages.

- [x] **SEO-REC-2.1 [Deploy XML Sitemap & robots.txt Update]**:
  - **Priority**: High
  - **Effort**: Low (10 mins)
  - **Outcome**: Better indexing coverage.
  - **Validation**: Check `[domain]/sitemap.xml` and `[domain]/robots.txt`.

- [x] **SEO-REC-3.1 [Implement JSON-LD Schema]**:
  - **Priority**: High
  - **Effort**: Medium (15 mins)
  - **Outcome**: Eligibility for rich snippets (Profile Page).
  - **Validation**: Run through Google Rich Results Test.

- [ ] **SEO-REC-4.1 [Dynamic Meta Tags via Helmet]**:
  - **Priority**: Medium
  - **Effort**: Medium (20 mins)
  - **Outcome**: Unique titles/descriptions for all routes.
  - **Validation**: Check document title changes on route navigation.

---

### 3. Proposed Code Changes

#### Fix Heading Hierarchy (`src/components/portfolio/Section.tsx`)
```diff
-        <div className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
+        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
           {typeof title === "string" ? (
             <Typewriter phrases={[title]} typeSpeed={55} />
           ) : (
             title
           )}
-        </div>
+        </h2>
```

#### Add JSON-LD (`index.html`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ali Fakhreddine",
  "jobTitle": "Full Stack Developer",
  "url": "https://[your-domain]",
  "sameAs": [
    "https://github.com/dasjkvbdaj",
    "https://www.linkedin.com/in/ali-fakhreddine-3369a5312/"
  ],
  "description": "Professional Portfolio of Ali Fakhreddine - Computer Science Graduate & Full Stack Developer specializing in Spring Boot, React, and System Architecture."
}
</script>
```

---

### 4. Implementation Commands

- **Install SEO dependencies**:
  `npm install react-helmet-async`
- **Verify Sitemap**:
  `curl -I http://localhost:5173/sitemap.xml` (After creation)
- **Local Audit**:
  `npx lighthouse http://localhost:5173 --view`

---
**Status**: Audit Initialized. Ready for implementation.
