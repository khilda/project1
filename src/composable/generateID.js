export function useGenerateId() {
  return Math.random().toString(36).split(".").at(-1);
}
