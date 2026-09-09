import { supabase } from "./supabase";

export type MapPin = {
  map_lat: number;
  map_lng: number;
  city: string;
  state: string;
  service_type: string | null;
  completed_month: string | null;
};

export async function getCompletedJobPins(): Promise<MapPin[]> {
  const { data, error } = await supabase
    .from("jobs")
    .select("map_lat, map_lng, city, state, service_type, completed_month")
    .eq("status", "completed")
    .not("map_lat", "is", null);

  if (error) {
    console.error("Failed to fetch job pins:", error.message);
    return [];
  }
  return (data as MapPin[]) ?? [];
}

export function getJobCountsByCity(pins: MapPin[]): Record<string, number> {
  return pins.reduce(
    (acc, pin) => {
      const key = `${pin.city}, ${pin.state}`;
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
}
