export const getMeals = async () => {
  const data = await fetch("https://run.mocky.io/v3/82f40790-e9b9-4c5f-8a98-37b5c2148b2a?mocky-delay=1000ms");
  return data.json();
};
