function updateTrafficLight(current: string): string {
  if (current === "green") return "yellow"
  if (current === "yellow") return "red"
  return "green"
}