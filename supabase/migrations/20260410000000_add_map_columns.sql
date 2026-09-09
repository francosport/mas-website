-- Add geocoded map columns to jobs table
-- Coordinates are city/ZIP level only, with a random ~0.5mi offset applied before storage
-- No street address is ever stored here

alter table jobs
  add column if not exists map_lat        numeric(10, 7),
  add column if not exists map_lng        numeric(10, 7),
  add column if not exists completed_month text; -- format: 'YYYY-MM'

-- Public read-only RLS policy
-- Allows the website (anon key) to read only completed jobs that have been geocoded
-- Exposes only: map_lat, map_lng, city, state, service_type, completed_month
create policy "Public can read completed job map pins"
  on jobs
  for select
  to anon
  using (
    status = 'completed'
    and map_lat is not null
    and map_lng is not null
  );
