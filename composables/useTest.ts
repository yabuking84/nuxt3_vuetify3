export const useTest = () => {
  const hey = (str: string) => {
    console.log(str);
  };

  const go = {
    gogo: "12345",
  };

  return {
    hey,
    go,
  };
};
