-- TOOLVIA database schema (not applied yet; run in Supabase SQL editor in Phase 5).
create table if not exists categories (
  slug text primary key,
  name text not null,
  blurb text not null default ''
);

create table if not exists tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category_slug text not null references categories(slug),
  summary text not null,
  pricing text not null check (pricing in ('FREE','FREE PLAN','PAID')),
  official_url text,
  popularity int not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table categories enable row level security;
alter table tools enable row level security;

-- Public visitors can read categories and published tools only.
create policy "public read categories" on categories for select using (true);
create policy "public read published tools" on tools for select using (published = true);
-- No public insert/update/delete policies: writes are for the admin only (added in Phase 5).
