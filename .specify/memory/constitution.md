<!--
SYNC IMPACT REPORT
==================
Version change: (uninitialized template) → 1.0.0
Rationale: Initial ratification. The prior file was the unfilled template with
no concrete principles, so this is a fresh 1.0.0 adoption rather than an
amendment of a previously ratified version.

Modified principles: n/a (initial ratification)

Added sections:
  - Core Principles (5):
      I.   Type Safety & Lint Gate (NON-NEGOTIABLE)
      II.  Critical-Path Integration Tests
      III. Simplicity & YAGNI
      IV.  Observable Errors
      V.   Accessibility & i18n by Default
  - Technology & Deployment Constraints
  - Development Workflow & Quality Gates
  - Governance

Removed sections: n/a

Templates requiring updates:
  - .specify/templates/plan-template.md       ✅ aligned (Constitution Check
    references the constitution file generically; no edit required)
  - .specify/templates/spec-template.md       ✅ aligned (no principle-specific
    references)
  - .specify/templates/tasks-template.md      ✅ aligned (generic phases; the
    optional-tests note is consistent with Principle II, which scopes
    integration tests to critical paths only)
  - .specify/templates/checklist-template.md  ✅ aligned (generic)
  - README.md                                 ✅ aligned (project description
    only, no principle references)
  - CLAUDE.md                                 ✅ aligned (delegates runtime
    guidance to the current plan)

Follow-up TODOs: none. All placeholders filled; ratification date set to today.
-->

# Via di Scopello Tickets Constitution

## Core Principles

### I. Type Safety & Lint Gate (NON-NEGOTIABLE)

All code MUST pass `pnpm typecheck` and `pnpm lint` before merging to `main`.
React Router 7 route typegen MUST be regenerated whenever route signatures,
loaders, or actions change. The `any` escape hatch is forbidden except with an
inline comment explaining the specific reason and a linked follow-up if the
escape is temporary.

**Rationale**: TypeScript and ESLint are the cheapest layer of feedback for
this stack. Letting type errors or lint regressions slip into `main` defeats
the safety net that the rest of the workflow relies on.

### II. Critical-Path Integration Tests

The following flows MUST have Playwright end-to-end coverage in `tests/` and
the tests MUST pass via `pnpm test:e2e:run` before merging:

- Authentication (sign-in, sign-out, protected route enforcement)
- Stripe checkout and webhook handling
- Ticket purchase and issuance

Schema, route, or contract changes touching these flows MUST update tests in
the same PR. Other code paths MAY add tests at the author's discretion;
exhaustive coverage outside critical paths is explicitly NOT required.

**Rationale**: This is a small ticketing site with a single operator. Broad
unit-test discipline is overhead the project cannot afford, but breakage in
auth or payments is user-visible and revenue-affecting, so those paths must
not regress silently.

### III. Simplicity & YAGNI

Add abstractions only when a second concrete use case appears. Prefer
framework-native patterns (React Router 7 loaders/actions, Prisma queries,
plain functions) over wrappers, custom hooks, or service layers introduced
for hypothetical future flexibility. Delete dead code rather than commenting
it out or hiding it behind unused flags. New dependencies MUST be justified
against what is already in `package.json`.

**Rationale**: Solo and small-team projects rot fastest when speculative
infrastructure outpaces real requirements. Keeping the surface area small
keeps the project maintainable by one person.

### IV. Observable Errors

Server-side errors thrown inside React Router loaders, actions, and resource
routes MUST be logged with at least: request path, HTTP method, and the
error's `name`, `message`, and stack. Stripe webhook handlers MUST log the
event ID and relevant object IDs (customer, subscription, payment intent)
when failing. The `/healthcheck` endpoint MUST remain functional and MUST
exercise database connectivity so that Fly health checks reflect real
liveness, not just process uptime.

**Rationale**: Without consistent server-side logs, production incidents on a
single-instance Fly deployment are nearly impossible to diagnose
retroactively.

### V. Accessibility & i18n by Default

All new user-facing strings MUST be added through `i18next` keys with at
minimum Italian and English entries; raw user-visible literals in JSX are
forbidden. Forms MUST associate every input with a visible label and surface
validation errors in text (not color alone). New interactive components MUST
be keyboard-operable. Images that convey meaning MUST have alt text.

**Rationale**: The site's primary audience is Italian-speaking with an
international tail; bilingual support is a product requirement, not a nice
to have. Baseline accessibility is also a baseline for usability — fixing it
retroactively is more expensive than building it in.

## Technology & Deployment Constraints

- **Runtime**: Node.js `^20.19.0 || >=22.12.0` (per `package.json` engines).
  Do not introduce APIs that require a newer minimum.
- **Stack**: React Router 7 (do not reintroduce Remix-specific APIs), Prisma
  with SQLite, TailwindCSS, Stripe, AWS S3 for object storage, `i18next` for
  translations, Playwright for E2E. Replacements MUST be proposed as an
  amendment.
- **Package manager**: pnpm (version pinned via `packageManager` in
  `package.json`). Do not commit `npm` or `yarn` lockfiles.
- **Deployment**: Fly.io via Docker; `start.sh` is the production entry
  point. Production deploys happen on merge to `main`.
- **Database**: SQLite managed by Prisma. Schema changes MUST go through
  `prisma migrate` and ship with the generated migration. Hand-written SQL
  migrations are discouraged and MUST include a rationale in the PR.
- **Secrets**: Supplied via environment variables (`.env` locally, Fly
  secrets in production). Secrets, API keys, and `.env*` files MUST NOT be
  committed.

## Development Workflow & Quality Gates

- `pnpm validate` (lint + typecheck + e2e) MUST pass locally before pushing
  a change intended for `main`.
- Branch from `main` for non-trivial work; trivial fixes MAY land directly.
  Branch names SHOULD describe the change (e.g., `fix-stripe-webhook-retry`).
- PRs (when used) SHOULD self-check against the principles above in the
  description; reviewer compliance checks are encouraged but not required
  while the project has a single maintainer.
- Generated artifacts (`build/`, `node_modules/`, Prisma client output)
  MUST NOT be committed.
- Schema changes MUST be accompanied by an updated seed (`prisma/seed.ts`)
  when seed data is affected, and the updated seed MUST run cleanly against
  a fresh database before merge.

## Governance

This constitution supersedes ad-hoc conventions when in conflict. When code
and constitution disagree, the code is the bug.

**Amendments**: Edit `.specify/memory/constitution.md` in a dedicated commit
or PR. The change MUST include (a) the updated principles or sections,
(b) a bumped version per the policy below, (c) an updated Sync Impact Report
at the top of the file, and (d) updates to any dependent templates or docs
that the change invalidates.

**Versioning policy** (semantic versioning of the constitution itself):

- **MAJOR**: A principle is removed, renamed in a way that changes its
  meaning, or its rule is materially weakened or reversed.
- **MINOR**: A new principle or top-level section is added, or an existing
  principle's scope is materially expanded.
- **PATCH**: Clarifications, typo fixes, rewording that does not change the
  rule's meaning.

**Compliance**: New work SHOULD be self-checked against the principles
before merging. Violations MUST either be fixed before merge or recorded in
the PR description with a justification and (where applicable) a follow-up
task.

**Runtime guidance**: For day-to-day development context (active feature
plans, repository conventions, agent instructions) consult the current
feature plan under `specs/<feature>/plan.md` and `CLAUDE.md`. Those files
elaborate; this constitution constrains.

**Version**: 1.0.0 | **Ratified**: 2026-05-14 | **Last Amended**: 2026-05-14
